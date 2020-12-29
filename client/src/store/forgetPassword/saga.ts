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
    const request = yield call(axiosPut, `/forgotPassword`, payload);
    if (request.status === 200) 
      yield put({
        type: FORGET_PASSWORD.success,
        payload: { message: request.data.message },
      });
     else if (request.status === 202)
      yield put({
        type: FORGET_PASSWORD.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: FORGET_PASSWORD.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* forgetPasswordSaga(): SagaIterator {
  yield takeLatest(getType(forgetPasswordStarted), forgetPassword);
}
