from __future__ import annotations
import os
import datetime
import hmac
import secrets
import hashlib
from typing import List, Dict, Any, TYPE_CHECKING
from typing_extensions import Annotated

# from ..db import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column
from flask import current_app as app

from .base import Base

from .node import journeyspec_nodespec_table, journey_node_table

if TYPE_CHECKING:
    from .hit import HITSpec, HITInstance
    from .node import NodeSpec, NodeInstance


class JourneySpec(Base):
    __tablename__ = "journeyspecs"
    id: Mapped[int] = mapped_column(primary_key=True)

    # spec relationships
    # up
    hitspec_id: Mapped[int] = mapped_column(ForeignKey("hitspecs.id"))
    hitspec: Mapped["HITSpec"] = relationship(back_populates="journeyspecs")

    # down
    nodespecs: Mapped[List["NodeSpec"]] = relationship(
        secondary=journeyspec_nodespec_table, back_populates="journeyspecs"
    )

    # instance relationships
    journeys: Mapped[List["JourneyInstance"]] = relationship(back_populates="spec")

    def __init__(self, nodes: List["NodeSpec"] = []):
        super().__init__()
        self.nodes = nodes

    def instantiate(self):
        instance = JourneyInstance()
        self.journeys.append(instance)
        return instance

    def append(self, node: "NodeSpec"):
        self.nodespecs.append(node)

    def __repr__(self):
        pass


class JourneyInstance(Base):
    """Represents an instance of a HIT, to be solved by one user"""

    __tablename__ = "journeyinstances"

    id: Mapped[bytes] = mapped_column(primary_key=True)

    # one JourneySpec -> many JourneyInstance
    journeyspec_id: Mapped[int] = mapped_column(ForeignKey("journeyspecs.id"))
    # journeyspec_id = Column(Integer, ForeignKey('journeyspecs.id'))
    spec: Mapped["JourneySpec"] = relationship(back_populates="journeys")

    # one HitInstance -> many JourneyInstance
    hit_id: Mapped[int] = mapped_column(ForeignKey("hitinstances.id"))
    # hit_id = Column(Integer, ForeignKey('hitinstances.id'))
    hit: Mapped["HITInstance"] = relationship(back_populates="journeys")

    nodes: Mapped[List["NodeInstance"]] = relationship(
        secondary=journey_node_table, back_populates="journeys"
    )
    interface: Mapped[Dict[str, Any]] = mapped_column()

    # submitted = Mapped[bool]

    # status
    # one NodeInstance -> many JourneyInstance
    curr_node_id: Mapped[int] = mapped_column(
        ForeignKey("nodeinstances.id"), nullable=True
    )
    curr_node: Mapped["NodeInstance"] = relationship(back_populates="curr_journeys")

    # dates
    # submitted: Mapped[datetime.datetime] = mapped_column(nullable=True)
    created: Mapped[datetime.datetime] = mapped_column(default=datetime.datetime.now)
    updated: Mapped[datetime.datetime] = mapped_column(
        default=datetime.datetime.now, onupdate=datetime.datetime.now
    )

    instance_counter = 0

    @staticmethod
    def get_id():
        if os.environ.get("COVFEE_ENV") == "dev":
            # return predictable id in dev mode
            # so that URLs don't change on every run
            id = hashlib.sha256(
                (str(JourneyInstance.instance_counter).encode())
            ).digest()
            JourneyInstance.instance_counter += 1
        else:
            id = secrets.token_bytes(32)
        return id

    def __init__(self):
        self.id = JourneyInstance.get_id()
        self.preview_id = hashlib.sha256((self.id + "preview".encode())).digest()
        self.submitted = False
        self.interface = {}

    def get_api_url(self):
        return f'{app.config["API_URL"]}/instances/{self.id.hex():s}'

    def get_url(self):
        return f'{app.config["APP_URL"]}/hits/{self.id.hex():s}'

    def get_preview_url(self):
        return f'{app.config["APP_URL"]}/hits/{self.preview_id.hex():s}?preview=1'

    def set_curr_node(self, node):
        self.curr_node = node
        node.update_status()

    def get_completion_info(self):
        completion = {
            "completionCode": self.hit.config.get(
                "completionCode",
                hashlib.sha256(
                    (self.id.hex() + app.config["COVFEE_SECRET_KEY"]).encode()
                )
                .digest()
                .hex()[:12],
            ),
            "redirectName": self.hit.config.get("redirectName", None),
            "redirectUrl": self.hit.config.get("redirectUrl", None),
        }
        return completion

    def get_hmac(self):
        h = hmac.new(
            app.config["COVFEE_SECRET_KEY"].encode("utf-8"), self.id, hashlib.sha256
        )
        return h.hexdigest()

    def submit(self):
        if any(
            [
                (task.spec.required and not task.has_valid_response())
                for task in self.tasks
            ]
        ):
            # cant submit if at least one required task has no valid submissions
            return False, "Some required tasks have no valid responses."
        else:
            self.submitted = True
            self.submitted_at = datetime.datetime.now()
            return True, None

    def to_dict(self, with_nodes=False, with_response_info=False):
        instance_dict = super().to_dict()
        spec_dict = self.spec.to_dict()

        instance_dict["id"] = instance_dict["id"].hex()
        instance_dict["hit_id"] = instance_dict["hit_id"].hex()
        instance_dict["token"] = self.get_hmac()

        # merge hit and instance dicts
        instance_dict = {**spec_dict, **instance_dict}

        if with_nodes:
            instance_dict["nodes"] = [n.to_dict() for n in self.nodes]
        else:
            instance_dict["nodes"] = [n.id for n in self.nodes]

        # if self.submitted:
        #     instance_dict['completionInfo'] = self.get_completion_info()
        # instance_dict['interface']

        return instance_dict

    def stream_download(self, z, base_path, csv=False):
        for i, task in enumerate(self.tasks):
            yield from task.stream_download(z, base_path, i, csv)
