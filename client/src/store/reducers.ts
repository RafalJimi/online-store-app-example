import { combineReducers } from "redux";

import { BurgerMenuState, burgerMenu } from "./burgerMenu/reducer";
import { LoginMenuState, loginMenu } from "./loginMenu/reducer";
import { RegisterMenuState, registerMenu } from "./registerMenu/reducer";

export type AppState = {
  burgerMenu: BurgerMenuState;
  loginMenu: LoginMenuState;
  registerMenu: RegisterMenuState;
};

export const reducer = combineReducers<AppState>({
  burgerMenu,
  loginMenu,
  registerMenu,
});

export type RootState = ReturnType<typeof reducer>;
