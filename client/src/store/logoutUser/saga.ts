import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import { removeLocalStorage } from "../../helpers/auth";

import { LOGOUT_USER } from "./consts";
import { CHECK_AUTH } from "../checkAuth/consts";
import { logoutUserStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* logoutUser() {
  try {
    removeLocalStorage("token");
    yield put({
      type: CHECK_AUTH.success,
      payload: { role: "" },
    });
    yield put({ type: LOGOUT_USER.success });
  } catch (e) {
    yield put({
      type: LOGOUT_USER.failure,
      error: "Something went wrong, try again.",
    });
  }
}

export function* logoutSaga(): SagaIterator {
  yield takeLatest(getType(logoutUserStarted), logoutUser);
}
