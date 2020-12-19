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
    if (request.getTransactionHistory)
      yield put({
        type: GET_TRANSACTION_HISTORY.success,
        payload: { transactions: request.transactions },
      });
    else if (!request.getTransactionHistory)
      yield put({
        type: GET_TRANSACTION_HISTORY.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: GET_TRANSACTION_HISTORY.failure,
      payload: { error: e },
    });
  }
}

export function* getTransactionHistorySaga(): SagaIterator {
  yield takeLatest(
    getType(getTransactionHistoryStarted),
    getTransactionHistory
  );
}
