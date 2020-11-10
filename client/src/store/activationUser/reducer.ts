import { ACTIVATION_USER, CLEAR_ACTIVATION_USER_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { activationUserStarted } from "./actions";

export type ActivationUserState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const activationUser = (
  state = initialState,
  action: Action
): ActivationUserState => {
  switch (action.type) {
    case getType(activationUserStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case ACTIVATION_USER.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isError: "",
      };
    case ACTIVATION_USER.failure:
      return {
        ...state,
        message: "",
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_ACTIVATION_USER_STATE:
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
