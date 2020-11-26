import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosGet } from "../../common/axios";

import { GET_PRODUCT_DETAILS } from "./consts";
import { ADD_IMAGES_TO_GALLERY } from "../imageGallery/consts";
import { getProductDetailsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getProductDetails({
  payload,
}: ReturnType<typeof getProductDetailsStarted>) {
  try {
    const { productId } = payload;
    console.log();
    const request = yield call(
      axiosGet,
      `/products/getProductDetails?productId=${productId}`
    );
    console.log("getProducts result", request);
    if (request.getProductDetails) {
      yield put({
        type: GET_PRODUCT_DETAILS.success,
        payload: { product: request.product },
      });
      let galleryImages: any[] = [];
      for (let i = 0; i < request.product.images.length; i++) {
        let thumbnail = request.product.images[i].path.replace(
          request.product.images[i].fileName,
          `thumbnail-${request.product.images[i].fileName}`
        );
        galleryImages.push({
          original: `${process.env.REACT_APP_SERVER_URL}${request.product.images[i].path}`,
          thumbnail: `${process.env.REACT_APP_SERVER_URL}${thumbnail}`,
        });
      }
      yield put({
        type: ADD_IMAGES_TO_GALLERY,
        payload: { images: galleryImages },
      });
    } else if (!request.getProducts)
      yield put({
        type: GET_PRODUCT_DETAILS.failure,
        payload: { error: request.error },
      });
  } catch (e) {
    yield put({ type: GET_PRODUCT_DETAILS.failure, message: e });
  }
}

export function* getProductDetailsSaga(): SagaIterator {
  yield takeLatest(getType(getProductDetailsStarted), getProductDetails);
}
