import { getType } from "typesafe-actions";
import { Action } from "../../helpers/actions";
import { toggleBurgerMenu } from "./actions";

export type BurgerMenuState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

export const burgerMenu = (
  state = initialState,
  action: Action
): BurgerMenuState => {
  switch (action.type) {
    case getType(toggleBurgerMenu):
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
