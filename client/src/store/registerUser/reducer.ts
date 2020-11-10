import { REGISTER_USER, CLEAR_REGISTER_USER_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { registerUserStarted } from "./actions";

export type RegisterUserState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const registerUser = (
  state = initialState,
  action: Action
): RegisterUserState => {
  switch (action.type) {
    case getType(registerUserStarted):
      console.log(action);
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER.success:
      console.log(action);
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
      };
    case REGISTER_USER.failure:
      console.log(action);
      return {
        ...state,
        message: "",
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_REGISTER_USER_STATE:
      console.log(action);
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
