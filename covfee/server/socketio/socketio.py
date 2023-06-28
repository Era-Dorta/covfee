import hashlib
import hmac

from .. import tasks
from ..tasks.base import BaseCovfeeTask
from flask import current_app as app, session
from flask_socketio import SocketIO, send, emit, join_room, leave_room
from covfee.server.orm import (
    TaskResponse,
    TaskInstance,
    JourneyInstance,
)
from covfee.server.socketio.redux_store import ReduxStoreClient


socketio = SocketIO()
store = ReduxStoreClient()


def get_journey(jid: str) -> JourneyInstance:
    return app.session.query(JourneyInstance).get(bytes.fromhex(jid))


def get_response(responseId: int) -> TaskResponse:
    return app.session.query(TaskResponse).get(responseId)


def get_task_object(responseId: int):
    response = app.session.query(TaskResponse).get(responseId)
    if response is None:
        return None

    task = response.task
    task_class = getattr(tasks, task.spec.spec["type"], BaseCovfeeTask)
    task_object = task_class(response=response)
    return task_object


@socketio.on("connect")
def on_connect(data):
    pass


@socketio.on("join")
def on_join(data):
    journeyId = str(data["journeyId"])
    journey = get_journey(journeyId)

    responseId = str(data["responseId"])
    response = get_response(responseId)

    if journey is None or response is None:
        send(f"Unable to join, journeyId={journeyId}, responseId={responseId}")

    journey.set_curr_node(response.task)
    app.session.commit()

    res = store.join(responseId, response.task.spec.spec["type"], response.state)
    if res["success"]:
        join_room(responseId)
        print(f"joined room {responseId}")
        session["responseId"] = responseId
        print(session["responseId"])
        session.modified = True
        emit("state", res)

        # if this is the first join, run the on_first_join callback
        # if res['numConnections'] == 1:
        #     get_task_object(int(room)).on_first_join()

    else:
        send(f"Unable to join room id={responseId}")


@socketio.on("action")
def on_action(data):
    print("action")
    action = data["action"]
    responseId = str(data["responseId"])
    print(session)
    # if responseId != session["responseId"]:
    #     return send(
    #         f'data["responseId"] does not match session\'s responseId variable. {responseId} != {session["responseId"]}'
    #     )

    res = store.action(responseId, action)
    if res["success"]:
        emit("action", action, to=responseId)


def leave_responseid(responseId):
    res = store.leave(responseId)

    if res["success"]:
        # save state to database
        response = get_response(responseId)
        response.state = res["state"]
        app.session.commit()

    # leave the room
    session["responseId"] = None
    leave_room(responseId)


@socketio.on("leave")
def on_leave(data):
    responseId = str(data["responseId"])
    if responseId != session["responseId"]:
        return send(
            f'data["responseId"] does not match session\'s responseId variable. {responseId} != {session["responseId"]}'
        )
    leave_responseid(responseId)
    # if the room is now empty
    # if res["numConnections"] == 0:
    #     get_task_object(int(responseId)).on_last_leave()


@socketio.on("disconnect")
def disconnect():
    if "responseId" in session:
        responseId = session["responseId"]
        leave_responseid(responseId)
