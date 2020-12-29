import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_USER_TRANSACTION_DETAILS } from "./consts";
import { getUserTransactionDetailsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getUserTransactionDetails({
  payload,
}: ReturnType<typeof getUserTransactionDetailsStarted>) {
  try {
    const { transactionId } = payload;
    const request = yield call(
      networkHandlerGet,
      `/user/transactionDetails?id=${transactionId}`
    );

    if (request.status === 200)
      yield put({
        type: GET_USER_TRANSACTION_DETAILS.success,
        payload: { details: request.data.details[0] },
      });
    else if (request.status === 203)
      yield put({
        type: GET_USER_TRANSACTION_DETAILS.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: GET_USER_TRANSACTION_DETAILS.failure,
      payload: { error: "Something went wrong, please try again" },
    });
  }
}

export function* getUserTransactionDetailsSaga(): SagaIterator {
  yield takeLatest(
    getType(getUserTransactionDetailsStarted),
    getUserTransactionDetails
  );
}
