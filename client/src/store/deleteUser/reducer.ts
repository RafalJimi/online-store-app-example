import { DELETE_USER, CLEAR_DELETE_USER_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { deleteUserStarted } from "./actions";

export type DeleteUserState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const deleteUser = (
  state = initialState,
  action: Action
): DeleteUserState => {
  switch (action.type) {
    case getType(deleteUserStarted):
      return {
        ...state,
        message: "",
        isLoading: true,
        isError: "",
      };
    case DELETE_USER.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isError: "",
      };
    case DELETE_USER.failure:
      return {
        ...state,
        message: "",
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_DELETE_USER_STATE:
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
