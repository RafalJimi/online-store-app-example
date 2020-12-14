import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_USER_ADDRESS } from "./consts";
import { getUserAddressStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getUserAddress() {
  try {
    const request = yield call(networkHandlerGet, `/user/order`);
    console.log(request);
    if (request.getUserAddress)
      yield put({
        type: GET_USER_ADDRESS.success,
        payload: { user: request.data },
      });
    else if (!request.isAuth)
      yield put({
        type: GET_USER_ADDRESS.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: GET_USER_ADDRESS.failure,
      payload: { error: "Error happening, please try again." },
    });
  }
}

export function* getUserAddressSaga(): SagaIterator {
  yield takeLatest(getType(getUserAddressStarted), getUserAddress);
}
