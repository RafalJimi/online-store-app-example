import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosPost } from "../../common/axios";

import { ACTIVATION_USER } from "./consts";
import { activationUserStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* activationUser({
  payload,
}: ReturnType<typeof activationUserStarted>) {
  try {
    const request = yield call(axiosPost, `/activation`, payload);
    if (request.status === 200)
      yield put({
        type: ACTIVATION_USER.success,
        payload: { message: request.data.message },
      });
    else if (request.status === 202)
      yield put({
        type: ACTIVATION_USER.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: ACTIVATION_USER.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* activationUserSaga(): SagaIterator {
  yield takeLatest(getType(activationUserStarted), activationUser);
}
