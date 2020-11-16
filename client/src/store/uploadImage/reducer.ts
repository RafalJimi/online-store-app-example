import { UPLOAD_IMAGE, DELETE_IMAGE, CLEAR_UPLOAD_IMAGE_STATE } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../types/actions";
import { uploadImageStarted, deleteImageStarted } from "./actions";

export type Image = {
  id: number;
  fileName: string;
  path: string;
};

export type UploadImageState = {
  isError: string;
  isLoading: boolean;
  images: Image[];
};

export const initialState: UploadImageState = {
  isError: "",
  isLoading: false,
  images: [],
};

export const uploadImage = (
  state = initialState,
  action: Action
): UploadImageState => {
  switch (action.type) {
    case getType(uploadImageStarted):
      return {
        ...state,
        isLoading: true,
      };
    case UPLOAD_IMAGE.success:
      console.log("UploadImageSuccessfully", action.payload);
      return {
        ...state,
        images: [
          ...state.images,
          {
            id: action.payload.id,
            fileName: action.payload.fileName,
            path: action.payload.path,
          },
        ],
        isLoading: false,
      };
    case UPLOAD_IMAGE.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    case getType(deleteImageStarted):
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    case DELETE_IMAGE.success:
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.payload.id),
        isLoading: false,
        isError: "",
      };
    case DELETE_IMAGE.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    case CLEAR_UPLOAD_IMAGE_STATE:
      return {
        ...state,
        isError: "",
        isLoading: false,
        images: [],
      };
    default:
      return { ...state };
  }
};
