import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_USER_DATA } from "./consts";
import { getUserDataStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getUserData({
  payload,
}: ReturnType<typeof getUserDataStarted>) {
  try {
    const { email } = payload;
    console.log(email);
    const request = yield call(
      networkHandlerGet,
      `/admin/getUserData?email=${email}`
    );
    console.log(request);
    if (request.getUserData)
      yield put({
        type: GET_USER_DATA.success,
        payload: { user: request.user },
      });
    else if (!request.isAdmin)
      yield put({
        type: GET_USER_DATA.failure,
        payload: { error: request.error },
      });
    else if (!request.getUserData)
      yield put({
        type: GET_USER_DATA.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: GET_USER_DATA.failure,
      payload: { error: "Error happening, please try again." },
    });
  }
}

export function* getUserDataSaga(): SagaIterator {
  yield takeLatest(getType(getUserDataStarted), getUserData);
}
