import { UPLOAD_IMAGE, DELETE_IMAGE } from "./consts";

import { createAction } from "typesafe-actions";

export type UploadImageProps = {
  id: number;
  img: any;
};

export const uploadImageStarted = createAction(
  UPLOAD_IMAGE.started,
  (id, img): UploadImageProps => ({
    id,
    img,
  })
)();

export type DeleteImageProps = {
  id: number;
  link: string;
};

export const deleteImageStarted = createAction(
  DELETE_IMAGE.started,
  (id, link): DeleteImageProps => ({
    id,
    link,
  })
)();
