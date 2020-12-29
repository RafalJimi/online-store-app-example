import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_TRANSACTION_HISTORY } from "./consts";
import { getTransactionHistoryStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getTransactionHistory() {
  try {
    const request = yield call(
      networkHandlerGet,
      `/admin/getTransactionHistory`
    );
    if (request.status === 200)
      yield put({
        type: GET_TRANSACTION_HISTORY.success,
        payload: { transactions: request.data.transactions },
      });
    else if (request.status === 203)
      yield put({
        type: GET_TRANSACTION_HISTORY.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: GET_TRANSACTION_HISTORY.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* getTransactionHistorySaga(): SagaIterator {
  yield takeLatest(
    getType(getTransactionHistoryStarted),
    getTransactionHistory
  );
}
