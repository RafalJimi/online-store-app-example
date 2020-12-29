import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosPost } from "../../common/axios";

import { REGISTER_USER } from "./consts";
import { registerUserStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* registerUser({
  payload,
}: ReturnType<typeof registerUserStarted>) {
  try {
    const { user } = payload;
    const request = yield call(axiosPost, `/register`, user);
    if (request.status === 200)
      yield put({
        type: REGISTER_USER.success,
        payload: { message: request.data.message },
      });
    else if (request.status === 202)
      yield put({
        type: REGISTER_USER.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: REGISTER_USER.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* registerUserSaga(): SagaIterator {
  yield takeLatest(getType(registerUserStarted), registerUser);
}
