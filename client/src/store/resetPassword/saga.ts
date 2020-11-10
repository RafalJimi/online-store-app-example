import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosPut } from "../../common/axios";

import { RESET_PASSWORD } from "./consts";
import { resetPasswordStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* resetPassword({
  payload,
}: ReturnType<typeof resetPasswordStarted>) {
  try {
    const { resetPasswordData } = payload;
    const request = yield call(axiosPut, `/resetpassword`, resetPasswordData);
    if (request.resetPasswordResult) {
      yield put({
        type: RESET_PASSWORD.success,
        payload: { message: request.message },
      });
    } else if (!request.resetPasswordResult)
      yield put({
        type: RESET_PASSWORD.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: RESET_PASSWORD.failure,
      payload: { error: e.request.errors },
    });
  }
}

export function* resetPasswordSaga(): SagaIterator {
  yield takeLatest(getType(resetPasswordStarted), resetPassword);
}
