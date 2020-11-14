import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { uploadHandlerPost } from "../../common/uploadHandler";

import { UPLOAD_IMAGE, DELETE_IMAGE } from "./consts";
import { uploadImageStarted, deleteImageStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* uploadImage({
  payload,
}: ReturnType<typeof uploadImageStarted>) {
  try {
    const { img, id } = payload;
    const request = yield call(uploadHandlerPost, `/admin/uploadImage`, img);
    console.log(request);
    if (request.uploadImage)
      yield put({
        type: UPLOAD_IMAGE.success,
        payload: { id: id, fileName: request.fileName },
      });
  } catch (e) {
    yield put({ type: UPLOAD_IMAGE.failure, message: e });
  }
}

export function* deleteImage({
  payload,
}: ReturnType<typeof deleteImageStarted>) {
  try {
    const { id, link } = payload;
    console.log(link, id);
    /* const request = yield call(uploadHandlerPost, `/admin/uploadImage`, link);
    console.log(request); */
    /* if (request.success)
      yield put({
        type: UPLOAD_IMAGE.success,
        payload: { id: id, link: request.image },
      }); */
  } catch (e) {
    yield put({ type: UPLOAD_IMAGE.failure, message: e });
  }
}

export function* uploadImageSaga(): SagaIterator {
  yield takeLatest(getType(uploadImageStarted), uploadImage);
}

export function* deleteImageSaga(): SagaIterator {
  yield takeLatest(getType(deleteImageStarted), deleteImage);
}
