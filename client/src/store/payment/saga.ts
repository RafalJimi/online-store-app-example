import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerPost } from "../../common/networkHandler";

import { PAYMENT } from "./consts";
import { paymentStarted } from "./actions";
import { getType } from "typesafe-actions";
import { getLocalStorage, removeLocalStorage } from "../../helpers/auth";

export function* payment({ payload }: ReturnType<typeof paymentStarted>) {
  try {
    const { paymentData } = payload;
    const products = getLocalStorage("basket");
    const data = {
      paymentData,
      products,
    };
    const request = yield call(networkHandlerPost, `/user/payment`, data);
    if (request.status === 200) {
      yield put({
        type: PAYMENT.success,
        payload: { message: request.data.message },
      });
      removeLocalStorage("basket");
    } else if (request.status === 203)
      yield put({
        type: PAYMENT.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: PAYMENT.failure,
      payload: { error: "Error happening, please try again." },
    });
  }
}

export function* paymentSaga(): SagaIterator {
  yield takeLatest(getType(paymentStarted), payment);
}
