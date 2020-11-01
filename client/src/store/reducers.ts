import { combineReducers } from "redux";

import { BurgerMenuState, burgerMenu } from "./burgerMenu/reducer";
import { LoginMenuState, loginMenu } from "./loginMenu/reducer";

export type AppState = {
  burgerMenu: BurgerMenuState;
  loginMenu: LoginMenuState;
};

export const reducer = combineReducers<AppState>({ burgerMenu, loginMenu });

export type RootState = ReturnType<typeof reducer>;
