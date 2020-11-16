import { UPLOAD_PRODUCT } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../types/actions";
import { uploadProductStarted } from "./actions";

export type UploadProductState = {
  isError: string;
  isLoading: boolean;
  message: string;
};

export const initialState: UploadProductState = {
  isError: "",
  isLoading: false,
  message: "",
};

export const uploadProduct = (
  state = initialState,
  action: Action
): UploadProductState => {
  switch (action.type) {
    case getType(uploadProductStarted):
      return {
        ...state,
        isLoading: true,
        message: "",
        isError: "",
      };
    case UPLOAD_PRODUCT.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
      };
    case UPLOAD_PRODUCT.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
