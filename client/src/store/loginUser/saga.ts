import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosPost } from "../../common/axios";

import { LOGIN_USER } from "./consts";
import { loginUserStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* loginUser({ payload }: ReturnType<typeof loginUserStarted>) {
  try {
    const { login } = payload;
    const request = yield call(axiosPost, `/login`, login);
    if (request.status === 200) {
      yield put({
        type: LOGIN_USER.success,
        payload: { token: request.data.token },
      });
    } else if (request.status === 202)
      yield put({
        type: LOGIN_USER.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: LOGIN_USER.failure,
      payload: { errors: "Something went wrong - please try again" },
    });
  }
}

export function* loginUserSaga(): SagaIterator {
  yield takeLatest(getType(loginUserStarted), loginUser);
}
