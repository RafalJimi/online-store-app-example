import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_TRANSACTION_DETAILS } from "./consts";
import { getTransactionDetailsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getTransactionDetails({
  payload,
}: ReturnType<typeof getTransactionDetailsStarted>) {
  try {
    const { transactionId } = payload;
    const request = yield call(
      networkHandlerGet,
      `/admin/getTransactionDetails?id=${transactionId}`
    );

    if (request.status === 200)
      yield put({
        type: GET_TRANSACTION_DETAILS.success,
        payload: { details: request.data.details },
      });
    else if (request.status === 203)
      yield put({
        type: GET_TRANSACTION_DETAILS.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: GET_TRANSACTION_DETAILS.failure,
      payload: { error: "Something went wrong, please try again" },
    });
  }
}

export function* getTransactionDetailsSaga(): SagaIterator {
  yield takeLatest(
    getType(getTransactionDetailsStarted),
    getTransactionDetails
  );
}
