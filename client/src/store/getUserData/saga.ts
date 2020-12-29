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
    const request = yield call(
      networkHandlerGet,
      `/admin/getUserData?email=${email}`
    );
    if (request.status === 200)
      yield put({
        type: GET_USER_DATA.success,
        payload: { user: request.data.user },
      });
    else if (request.status === 202)
      yield put({
        type: GET_USER_DATA.failure,
        payload: { error: request.data.error },
      });
    else if (request.status === 203)
      yield put({
        type: GET_USER_DATA.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
      yield put({
        type: GET_USER_DATA.failure,
        payload: { error: "Something went wrong - please try again" },
      });
  }
}

export function* getUserDataSaga(): SagaIterator {
  yield takeLatest(getType(getUserDataStarted), getUserData);
}
