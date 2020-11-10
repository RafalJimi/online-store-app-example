import { FORGET_PASSWORD, CLEAR_FORGET_PASSWORD_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { forgetPasswordStarted } from "./actions";

export type ForgetPasswordState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const forgetPassword = (
  state = initialState,
  action: Action
): ForgetPasswordState => {
  switch (action.type) {
    case getType(forgetPasswordStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        message: "",
      };
    case FORGET_PASSWORD.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
      };
    case FORGET_PASSWORD.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_FORGET_PASSWORD_STATE:
      return {
        ...state,
        message: "",
        isLoading: false,
        isError: "",
      };
    default:
      return { ...state };
  }
};
