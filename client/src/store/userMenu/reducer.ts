import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { toggleUserMenu } from "./actions";

export type UserMenuState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

export const userMenu = (
  state = initialState,
  action: Action
): UserMenuState => {
  switch (action.type) {
    case getType(toggleUserMenu):
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
