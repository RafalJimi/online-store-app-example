import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerDelete } from "../../common/networkHandler";

import { DELETE_USER } from "./consts";
import { deleteUserStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* deleteUser({ payload }: ReturnType<typeof deleteUserStarted>) {
  try {
    const { email } = payload;
    const request = yield call(
      networkHandlerDelete,
      `/admin/deleteUser?email=${email}`
    );
    if (request.status === 200)
      yield put({
        type: DELETE_USER.success,
        payload: { user: request.data.message },
      });
    else if (request.status === 203)
      yield put({
        type: DELETE_USER.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: DELETE_USER.failure,
      payload: { error: "Error happening, please try again." },
    });
  }
}

export function* deleteUserSaga(): SagaIterator {
  yield takeLatest(getType(deleteUserStarted), deleteUser);
}
