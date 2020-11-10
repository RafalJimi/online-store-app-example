import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { toggleLoginMenu } from "./actions";

export type LoginMenuState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

export const loginMenu = (
  state = initialState,
  action: Action
): LoginMenuState => {
  switch (action.type) {
    case getType(toggleLoginMenu):
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
