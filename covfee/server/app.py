import os
import json

import greenlet
import eventlet

eventlet.monkey_patch(thread=True, time=True)
from flask import current_app as app
from flask import Flask, Blueprint, render_template, send_from_directory
from sqlalchemy.orm import scoped_session
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_session import Session

from .scheduler.apscheduler import scheduler
from covfee.config import Config


def create_app(mode, session_local=None):
    # called once per process
    # but reused across threads

    app = Flask(__name__, static_folder=None)

    # load custom config to app.config
    config = Config(mode)
    config.update(app.config)
    app.config = config

    # custom JSON encoding
    from .rest_api.utils import CovfeeJSONProvider

    app.json = CovfeeJSONProvider(app)

    if session_local is None:
        from .db import get_session_local

        session_local = get_session_local(
            in_memory=False, db_path=config["DATABASE_PATH"]
        )

    app.sessionmaker = session_local
    app.session = scoped_session(session_local, scopefunc=greenlet.getcurrent)
    from .orm import set_sessionmaker

    set_sessionmaker(session_local)
    # socketio = SocketIO(app, cors_allowed_origins="*")
    from .socketio.socket import socketio
    from .socketio import chat, handlers

    # important: here, set socketio json implementation too
    socketio.init_app(app, manage_session=True, json=app.json)

    app.register_blueprint(frontend, url_prefix="/")
    from .rest_api import api, auth

    app.register_blueprint(api, url_prefix="/api")
    app.register_blueprint(auth, url_prefix="/auth")

    CORS(app, resources={r"/*": {"origins": "*"}})
    app.config["SECRET_KEY"] = "Meow Meow"
    app.config["SESSION_PERMANENT"] = False
    app.config["SESSION_TYPE"] = "filesystem"
    Session(app)
    jwt = JWTManager(app)

    from .rest_api import (
        add_claims_to_access_token,
        user_identity_lookup,
        user_loader_callback,
    )

    jwt.additional_claims_loader(add_claims_to_access_token)
    jwt.user_identity_loader(user_identity_lookup)
    jwt.user_lookup_loader(user_loader_callback)

    # APScheduler
    # app.scheduler = BackgroundScheduler()
    scheduler.start()

    @app.teardown_request
    def teardown_request(exception):
        if exception:
            app.session.rollback()
        app.session.remove()
        # app.scheduler.shutdown()

    return socketio, app


# APP ROUTES
frontend = Blueprint(
    "frontend",
    __name__,
    template_folder=os.path.join(
        os.path.dirname(os.path.realpath(__file__)), "templates"
    ),
)


# annotation app
@frontend.route("/")
def main():
    return render_template(
        "app.html",
        constants=json.dumps(app.config.get_frontend_config()),
        bundle_url=app.config["BUNDLES_URL"],
    )


# admin interface
@frontend.route("/admin")
def admin():
    return render_template(
        "admin.html",
        constants=json.dumps(app.config.get_frontend_config()),
        bundle_url=app.config["BUNDLES_URL"],
    )


# project www server
@frontend.route("/www/<path:filename>")
def project_www_file(filename):
    return send_from_directory(app.config["PROJECT_WWW_PATH"], filename)


@frontend.route("/bundles/<path:filename>")
def bundles(filename):
    return send_from_directory(app.config["MASTER_BUNDLE_PATH"], filename)


@frontend.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template("404.html"), 404
