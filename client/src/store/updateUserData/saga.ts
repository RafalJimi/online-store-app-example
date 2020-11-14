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
    console.log(request);
    if (request.updateUserData)
      yield put({
        type: UPDATE_USER_DATA.success,
        payload: { message: request.message },
      });
    else if (!request.isAdmin)
      yield put({
        type: UPDATE_USER_DATA.failure,
        payload: { error: request.error },
      });
    else if (!request.updateUserData)
      yield put({
        type: UPDATE_USER_DATA.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: UPDATE_USER_DATA.failure,
      payload: { error: "Error happening, please try again." },
    });
  }
}

export function* updateUserDataSaga(): SagaIterator {
  yield takeLatest(getType(updateUserDataStarted), updateUserData);
}
