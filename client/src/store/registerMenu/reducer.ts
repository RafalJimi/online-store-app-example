import { getType } from "typesafe-actions";
import { Action } from "../../helpers/actions";
import { toggleRegisterMenu } from "./actions";

export type RegisterMenuState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: true,
};

export const registerMenu = (
  state = initialState,
  action: Action
): RegisterMenuState => {
  switch (action.type) {
    case getType(toggleRegisterMenu):
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
