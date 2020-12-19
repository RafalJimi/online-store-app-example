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
    console.log(transactionId);

    const request = yield call(
      networkHandlerGet,
      `/admin/getTransactionDetails?id=${transactionId}`
    );

    if (request.getTransactionDetails)
      yield put({
        type: GET_TRANSACTION_DETAILS.success,
        payload: { details: request.details },
      });
    else if (!request.getTransactionDetails)
      yield put({
        type: GET_TRANSACTION_DETAILS.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({ type: GET_TRANSACTION_DETAILS.failure, payload: { error: e } });
  }
}

export function* getTransactionDetailsSaga(): SagaIterator {
  yield takeLatest(
    getType(getTransactionDetailsStarted),
    getTransactionDetails
  );
}
