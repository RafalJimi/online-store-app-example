import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosGet } from "../../common/axios";

import { GET_PRODUCTS } from "./consts";
import { getProductsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getProducts({
  payload,
}: ReturnType<typeof getProductsStarted>) {
  let x;
  try {
    const {
      skip,
      limit,
      gender,
      category,
      subCategory,
    } = payload.getProductsQueries;
    const queries = `?gender=${gender}&category=${category}&subCategory=${subCategory}&skip=${skip}&limit=${limit}`;
    const request = yield call(axiosGet, `/products/getProducts${queries}`);
      if (request.getProducts)
        for (x of request.products) {
          yield put({
            type: GET_PRODUCTS.success,
            payload: { product: x, loadMore: request.loadMore },
          });
        }
      else if (!request.getProducts)
        yield put({
          type: GET_PRODUCTS.failure,
          payload: { error: request.error },
        });
  } catch (e) {
    yield put({ type: GET_PRODUCTS.failure, message: e });
  }
}

export function* getProductsSaga(): SagaIterator {
  yield takeLatest(getType(getProductsStarted), getProducts);
}
