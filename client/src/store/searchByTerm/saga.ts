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
    console.log(request);
    if (request.searchByTerm)
      yield put({
        type: SEARCH_BY_TERM.success,
        payload: { searchResults: request.products },
      });
    else if (!request.searchByTerm)
      yield put({
        type: SEARCH_BY_TERM.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({ type: SEARCH_BY_TERM.failure, message: e });
  }
}

export function* searchByTermSaga(): SagaIterator {
  yield takeLatest(getType(searchByTermStarted), searchByTerm);
}
