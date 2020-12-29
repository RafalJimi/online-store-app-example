import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerPost } from "../../common/networkHandler";

import { UPDATE_USER_INFORMATIONS } from "./consts";
import { updateUserInformationsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* updateUserInformations({
  payload,
}: ReturnType<typeof updateUserInformationsStarted>) {
  try {
    const request = yield call(
      networkHandlerPost,
      `/user/updateInformations`,
      payload.user
    );
    if (request.status === 200)
      yield put({
        type: UPDATE_USER_INFORMATIONS.success,
        payload: { message: request.data.message },
      });
  } catch (e) {
    yield put({
      type: UPDATE_USER_INFORMATIONS.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* updateUserInformationsSaga(): SagaIterator {
  yield takeLatest(
    getType(updateUserInformationsStarted),
    updateUserInformations
  );
}
