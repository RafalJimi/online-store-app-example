import { RESET_PASSWORD, CLEAR_RESET_PASSWORD_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { resetPasswordStarted } from "./actions";

export type ResetPasswordState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const resetPassword = (
  state = initialState,
  action: Action
): ResetPasswordState => {
  switch (action.type) {
    case getType(resetPasswordStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        message: "",
      };
    case RESET_PASSWORD.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
      };
    case RESET_PASSWORD.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_RESET_PASSWORD_STATE:
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
