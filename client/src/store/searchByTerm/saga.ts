import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosGet } from "../../common/axios";

import { SEARCH_BY_TERM } from "./consts";
import { searchByTermStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* searchByTerm({
  payload,
}: ReturnType<typeof searchByTermStarted>) {
  try {
    const { term } = payload;
    const queries = `?term=${term}`;
    const request = yield call(axiosGet, `/products/searchByTerm${queries}`);
    if (request.status === 200)
      yield put({
        type: SEARCH_BY_TERM.success,
        payload: { searchResults: request.data.products },
      });
    else if (request.status === 202)
      yield put({
        type: SEARCH_BY_TERM.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: SEARCH_BY_TERM.failure,
      message: "Something went wrong - please try again",
    });
  }
}

export function* searchByTermSaga(): SagaIterator {
  yield takeLatest(getType(searchByTermStarted), searchByTerm);
}
