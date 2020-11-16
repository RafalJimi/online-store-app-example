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
    const { id, img, productName } = payload;
    const directoryName = productName
      .trim()
      .replace(/[ ]+/g, "_")
      .toLowerCase();
    const request = yield call(
      uploadHandlerPost,
      `/admin/uploadImage?directoryName=${directoryName}`,
      img
    );
    console.log(request);
    if (request.uploadImage) {
      const slash = "/";
      const path = request.path.replace(/\\/g, slash);
      yield put({
        type: UPLOAD_IMAGE.success,
        payload: { id: id, fileName: request.fileName, path: path },
      });
    } else if (!request.uploadImage)
      yield put({
        type: UPLOAD_IMAGE.failure,
        payload: { id: id, error: request.error },
      });
  } catch (e) {
    yield put({ type: UPLOAD_IMAGE.failure, message: e });
  }
}

export function* deleteImage({
  payload,
}: ReturnType<typeof deleteImageStarted>) {
  try {
    const { id, fileName, path } = payload;
    const directoryName = path.split("/")[2];
    const request = yield call(
      uploadHandlerPost,
      `/admin/deleteImage?directoryName=${directoryName}&fileName=${fileName}`
    );
    console.log(request);
    if (request.deleteImage)
      yield put({
        type: DELETE_IMAGE.success,
        payload: { id: id },
      });
    else
      yield put({
        type: DELETE_IMAGE.failure,
        payload: { id: id, error: request.error },
      });
  } catch (e) {
    yield put({ type: DELETE_IMAGE.failure, message: e });
  }
}

export function* uploadImageSaga(): SagaIterator {
  yield takeLatest(getType(uploadImageStarted), uploadImage);
}

export function* deleteImageSaga(): SagaIterator {
  yield takeLatest(getType(deleteImageStarted), deleteImage);
}
