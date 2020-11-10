import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

import { LOGOUT_USER } from "./consts";
import { logoutUserStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* logoutUser() {
  try {
    localStorage.clear();
    yield put({ type: LOGOUT_USER.success });
  } catch (e) {
    yield put({ type: LOGOUT_USER.failure, message: e });
  }
}

export function* logoutSaga(): SagaIterator {
  yield takeLatest(getType(logoutUserStarted), logoutUser);
}
