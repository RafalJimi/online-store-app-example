import { AppState } from "../reducers";
import { Image } from "./reducer";

export const uploadedImagesRX = (state: AppState): Image[] =>
  state.uploadImage.images;
