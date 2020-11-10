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
    console.log(request);
    if (request.loginResult) {
      yield put({
        type: LOGIN_USER.success,
        payload: { user: request.user, token: request.token },
      });
    } else
      yield put({
        type: LOGIN_USER.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: LOGIN_USER.failure,
      payload: { errors: "Something went wrong, try again." },
    });
  }
}

export function* loginUserSaga(): SagaIterator {
  yield takeLatest(getType(loginUserStarted), loginUser);
}
