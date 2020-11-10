import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { toggleContactWindow } from "./actions";

export type ContactWindowState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

export const contactWindow = (
  state = initialState,
  action: Action
): ContactWindowState => {
  switch (action.type) {
    case getType(toggleContactWindow):
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
