import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_USER_ADDRESS } from "./consts";
import { getUserAddressStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getUserAddress() {
  try {
    const request = yield call(networkHandlerGet, `/user/order`);
    if (request.status === 200)
      yield put({
        type: GET_USER_ADDRESS.success,
        payload: { user: request.data.userData },
      });
  } catch (e) {
    yield put({
      type: GET_USER_ADDRESS.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* getUserAddressSaga(): SagaIterator {
  yield takeLatest(getType(getUserAddressStarted), getUserAddress);
}
