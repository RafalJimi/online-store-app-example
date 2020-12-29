import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerGet } from "../../common/networkHandler";
import { CHECK_AUTH } from "./consts";
import { checkAuthStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* checkAuth() {
  try {
    const request = yield call(networkHandlerGet, `/auth`);
    if (request.status === 200)
      yield put({
        type: CHECK_AUTH.success,
        payload: { role: request.data.role },
      });
    else if (request.status === 203)
      yield put({
        type: CHECK_AUTH.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: CHECK_AUTH.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* checkAuthSaga(): SagaIterator {
  yield takeLatest(getType(checkAuthStarted), checkAuth);
}
