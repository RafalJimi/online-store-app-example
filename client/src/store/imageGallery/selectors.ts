import { AppState } from "../reducers";
import { ImageGallery } from "./actions";

export const imageGalleryIsOpenRX = (state: AppState): boolean =>
  state.imageGallery.isOpen;

export const imagesFromGalleryRX = (state: AppState): ImageGallery[] =>
  state.imageGallery.images;
