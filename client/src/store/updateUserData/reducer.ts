import { UPDATE_USER_DATA, CLEAR_UPDATE_USER_DATA_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { updateUserDataStarted } from "./actions";

export type UpdateUserDataState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const updateUserData = (
  state = initialState,
  action: Action
): UpdateUserDataState => {
  switch (action.type) {
    case getType(updateUserDataStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case UPDATE_USER_DATA.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isError: "",
      };
    case UPDATE_USER_DATA.failure:
      return {
        ...state,
        message: "",
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_UPDATE_USER_DATA_STATE:
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
