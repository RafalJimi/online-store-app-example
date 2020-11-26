import { createAction } from "typesafe-actions";

import { TOGGLE_IMAGE_GALLERY, ADD_IMAGES_TO_GALLERY } from "./consts";

export const toggleImageGallery = createAction(
  TOGGLE_IMAGE_GALLERY,
  () => ({})
)();

export type ImageGallery = {
  original: string;
  thumbnail: string;
};

export type AddImagesToGalleryProps = {
  images: ImageGallery[];
};

export const addImagesToGallery = createAction(
  ADD_IMAGES_TO_GALLERY,
  (images): AddImagesToGalleryProps => ({ images })
)();
