import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerPost } from "../../common/networkHandler";

import { UPDATE_USER_DATA } from "./consts";
import { updateUserDataStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* updateUserData({
  payload,
}: ReturnType<typeof updateUserDataStarted>) {
  try {
    const request = yield call(
      networkHandlerPost,
      `/admin/updateUserData`,
      payload
    );
    if (request.status === 200)
      yield put({
        type: UPDATE_USER_DATA.success,
        payload: { message: request.data.message },
      });
    else if (request.status === 203)
      yield put({
        type: UPDATE_USER_DATA.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: UPDATE_USER_DATA.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* updateUserDataSaga(): SagaIterator {
  yield takeLatest(getType(updateUserDataStarted), updateUserData);
}
