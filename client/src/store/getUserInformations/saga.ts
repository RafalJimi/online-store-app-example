import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../common/networkHandler";

import { GET_USER_INFORMATIONS } from "./consts";
import { getUserInformationsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getUserInformations() {
  try {
    const request = yield call(networkHandlerGet, `/user/informations`);
    if (request.status === 200)
      yield put({
        type: GET_USER_INFORMATIONS.success,
        payload: { user: request.data.userData },
      });
    else if (request.status === 203)
      yield put({
        type: GET_USER_INFORMATIONS.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: GET_USER_INFORMATIONS.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* getUserInformationsSaga(): SagaIterator {
  yield takeLatest(getType(getUserInformationsStarted), getUserInformations);
}
