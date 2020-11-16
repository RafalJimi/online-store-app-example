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
    console.log(productData);
    const request = yield call(
      networkHandlerPost,
      `/admin/uploadProduct`,
      productData
    );
    console.log(request);
    if (request.uploadProduct) {
      yield put({
        type: UPLOAD_PRODUCT.success,
        payload: { message: request.message },
      });
    } else if (!request.uploadProduct)
      yield put({
        type: UPLOAD_PRODUCT.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({ type: UPLOAD_PRODUCT.failure, message: e });
  }
}

export function* uploadProductSaga(): SagaIterator {
  yield takeLatest(getType(uploadProductStarted), uploadProduct);
}
