import { UPDATE_USER_INFORMATIONS } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { updateUserInformationsStarted } from "./actions";

export type UpdateUserInformationsState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const updateUserInformations = (
  state = initialState,
  action: Action
): UpdateUserInformationsState => {
  switch (action.type) {
    case getType(updateUserInformationsStarted):
      return {
        ...state,
        message: "",
        isLoading: true,
        isError: "",
      };
    case UPDATE_USER_INFORMATIONS.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isError: "",
      };
    case UPDATE_USER_INFORMATIONS.failure:
      return {
        ...state,
        message: "",
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
