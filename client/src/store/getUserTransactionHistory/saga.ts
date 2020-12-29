import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_USER_TRANSACTION_HISTORY } from "./consts";
import { getUserTransactionHistoryStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getUserTransactionHistory() {
  try {
    const request = yield call(networkHandlerGet, `/user/transactionHistory`);
    if (request.status === 200)
      yield put({
        type: GET_USER_TRANSACTION_HISTORY.success,
        payload: { user: request.data.transactions },
      });
    else if (request.status === 203)
      yield put({
        type: GET_USER_TRANSACTION_HISTORY.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: GET_USER_TRANSACTION_HISTORY.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* getUserTransactionHistorySaga(): SagaIterator {
  yield takeLatest(
    getType(getUserTransactionHistoryStarted),
    getUserTransactionHistory
  );
}
