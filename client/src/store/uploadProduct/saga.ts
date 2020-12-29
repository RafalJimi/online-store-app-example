import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerPost } from "../../common/networkHandler";

import { UPLOAD_PRODUCT } from "./consts";
import { uploadProductStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* uploadProduct({
  payload,
}: ReturnType<typeof uploadProductStarted>) {
  try {
    const { productData } = payload;
    const request = yield call(
      networkHandlerPost,
      `/admin/uploadProduct`,
      productData
    );
    if (request.status === 200)
      yield put({
        type: UPLOAD_PRODUCT.success,
        payload: { message: request.data.message },
      });
    else if (request.status === 203)
      yield put({
        type: UPLOAD_PRODUCT.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: UPLOAD_PRODUCT.failure,
      message: "Something went wrong, please try again",
    });
  }
}

export function* uploadProductSaga(): SagaIterator {
  yield takeLatest(getType(uploadProductStarted), uploadProduct);
}
