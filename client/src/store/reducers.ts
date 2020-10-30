import { combineReducers } from "redux";

import { BurgerMenuState, burgerMenu } from "./burgerMenu/reducer";

export type AppState = {
  burgerMenu: BurgerMenuState;
};

export const reducer = combineReducers<AppState>({ burgerMenu });

export type RootState = ReturnType<typeof reducer>;
