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
    const request = yield call(axiosPut, `/resetPassword`, resetPasswordData);
    if (request.status === 200) {
      yield put({
        type: RESET_PASSWORD.success,
        payload: { message: request.data.message },
      });
    } else if (request.status === 202)
      yield put({
        type: RESET_PASSWORD.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: RESET_PASSWORD.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* resetPasswordSaga(): SagaIterator {
  yield takeLatest(getType(resetPasswordStarted), resetPassword);
}
