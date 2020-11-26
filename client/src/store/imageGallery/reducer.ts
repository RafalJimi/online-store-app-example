import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { toggleImageGallery, addImagesToGallery } from "./actions";
import { ImageGallery } from "./actions";

export type ImageGalleryState = {
  isOpen: boolean;
  images: ImageGallery[];
};

const initialState = {
  isOpen: false,
  images: [{ original: "", thumbnail: "" }],
};

export const imageGallery = (
  state = initialState,
  action: Action
): ImageGalleryState => {
  switch (action.type) {
    case getType(toggleImageGallery):
      return { ...state, isOpen: !state.isOpen };
    case getType(addImagesToGallery):
      return { ...state, images: action.payload.images };
    default:
      return state;
  }
};
