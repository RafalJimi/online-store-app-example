import { CHECK_AUTH } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { checkAuthStarted } from "./actions";

export type CheckAuthState = {
  role: string;
  error: string;
};

export const initialState = {
  role: "",
  error: "",
};

export const checkAuth = (
  state = initialState,
  action: Action
): CheckAuthState => {
  switch (action.type) {
    case getType(checkAuthStarted):
      return {
        ...state,
      };
    case CHECK_AUTH.success:
      return {
        ...state,
        role: action.payload.role,
      };
    case CHECK_AUTH.failure:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
};
