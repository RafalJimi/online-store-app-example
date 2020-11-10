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
    if (request.activationResult)
      yield put({
        type: ACTIVATION_USER.success,
        payload: { message: request.message, user: request.user },
      });
    else if (!request.activationResult)
      yield put({
        type: ACTIVATION_USER.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({
      type: ACTIVATION_USER.failure,
      payload: { error: "Error happening, please try again." },
    });
  }
}

export function* activationUserSaga(): SagaIterator {
  yield takeLatest(getType(activationUserStarted), activationUser);
}
