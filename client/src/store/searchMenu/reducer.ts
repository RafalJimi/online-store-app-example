import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { toggleSearchMenu } from "./actions";

export type SearchMenuState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

export const searchMenu = (
  state = initialState,
  action: Action
): SearchMenuState => {
  switch (action.type) {
    case getType(toggleSearchMenu):
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
