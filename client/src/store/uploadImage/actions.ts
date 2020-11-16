import { UPLOAD_IMAGE, DELETE_IMAGE, CLEAR_UPLOAD_IMAGE_STATE } from "./consts";

import { createAction } from "typesafe-actions";

export type UploadImageProps = {
  id: number;
  img: any;
  productName: string;
};

export const uploadImageStarted = createAction(
  UPLOAD_IMAGE.started,
  (id, img, productName): UploadImageProps => ({
    id,
    img,
    productName,
  })
)();

export type DeleteImageProps = {
  id: number;
  fileName: string;
  path: string;
};

export const deleteImageStarted = createAction(
  DELETE_IMAGE.started,
  (id, fileName, path): DeleteImageProps => ({
    id,
    fileName,
    path,
  })
)();

export const clearImagesState = createAction(
  CLEAR_UPLOAD_IMAGE_STATE,
  () => ({})
)();
