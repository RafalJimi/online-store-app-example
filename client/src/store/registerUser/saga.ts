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
    if (request.registerResult)
      yield put({
        type: REGISTER_USER.success,
        payload: { message: request.message },
      });
    else if (!request.registerResult)
      if (request.error === "password must contain a number") {
        yield put({
          type: REGISTER_USER.failure,
          payload: { error: "Password must contain a number." },
        });
      } else
        yield put({
          type: REGISTER_USER.failure,
          payload: { error: request.error },
        });
  } catch (e) {
    yield put({
      type: REGISTER_USER.failure,
      payload: { error: "Something went wrong, try again later" },
    });
  }
}

export function* registerUserSaga(): SagaIterator {
  yield takeLatest(getType(registerUserStarted), registerUser);
}
