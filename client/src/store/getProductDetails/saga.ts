import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosPut } from "../../common/axios";

import { GET_PRODUCT_DETAILS } from "./consts";
import { ADD_IMAGES_TO_GALLERY } from "../imageGallery/consts";
import { getProductDetailsStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* getProductDetails({
  payload,
}: ReturnType<typeof getProductDetailsStarted>) {
  try {
    const { productId } = payload;
    const request = yield call(
      axiosPut,
      `/products/getProductDetails?productId=${productId}`
    );
    if (request.status === 200) {
      yield put({
        type: GET_PRODUCT_DETAILS.success,
        payload: { product: request.data.product },
      });
      let galleryImages: any[] = [];
      for (let i = 0; i < request.data.product.images.length; i++) {
        let thumbnail = request.data.product.images[i].path.replace(
          request.data.product.images[i].fileName,
          `thumbnail-${request.data.product.images[i].fileName}`
        );
        galleryImages.push({
          original: `${process.env.REACT_APP_SERVER_URL}${request.data.product.images[i].path}`,
          thumbnail: `${process.env.REACT_APP_SERVER_URL}${thumbnail}`,
        });
      }
      yield put({
        type: ADD_IMAGES_TO_GALLERY,
        payload: { images: galleryImages },
      });
    }
  } catch (e) {
    yield put({
      type: GET_PRODUCT_DETAILS.failure,
      message: "Something went wrong - please try again",
    });
  }
}

export function* getProductDetailsSaga(): SagaIterator {
  yield takeLatest(getType(getProductDetailsStarted), getProductDetails);
}
