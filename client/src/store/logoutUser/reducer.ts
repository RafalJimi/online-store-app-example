import { LOGOUT_USER } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../types/actions";
import { logoutUserStarted } from "./actions";

export type LogoutUserState = {
  logoutSuccess: boolean;
  isError: boolean;
};

export const initialState = {
  logoutSuccess: false,
  isError: false,
};

export const logoutUser = (
  state = initialState,
  action: Action
): LogoutUserState => {
  switch (action.type) {
    case getType(logoutUserStarted):
      return {
        ...state,
        logoutSuccess: false,
        isError: false,
      };
    case LOGOUT_USER.success:
      return {
        ...state,
        logoutSuccess: action.payload.success,
        isError: false,
      };
    case LOGOUT_USER.failure:
      return {
        ...state,
        logoutSuccess: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
