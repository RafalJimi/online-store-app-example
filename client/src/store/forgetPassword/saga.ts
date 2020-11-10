import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosPut } from "../../common/axios";

import { FORGET_PASSWORD } from "./consts";
import { forgetPasswordStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* forgetPassword({
  payload,
}: ReturnType<typeof forgetPasswordStarted>) {
  try {
    const request = yield call(axiosPut, `/forgotpassword`, payload);
    console.log(request);
    if (request.forgotPasswordResult) {
      yield put({
        type: FORGET_PASSWORD.success,
        payload: { message: request.message },
      });
    } else if (!request.forgotPasswordResult)
      yield put({
        type: FORGET_PASSWORD.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: FORGET_PASSWORD.failure,
      payload: { error: e.request.errors },
    });
  }
}

export function* forgetPasswordSaga(): SagaIterator {
  yield takeLatest(getType(forgetPasswordStarted), forgetPassword);
}
