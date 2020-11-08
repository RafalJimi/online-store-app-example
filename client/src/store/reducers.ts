import { combineReducers } from "redux";

import { BurgerMenuState, burgerMenu } from "./burgerMenu/reducer";
import { LoginMenuState, loginMenu } from "./loginMenu/reducer";
import { RegisterMenuState, registerMenu } from "./registerMenu/reducer";
import { ContactWindowState, contactWindow } from "./contactWindow/reducer";

export type AppState = {
  burgerMenu: BurgerMenuState;
  loginMenu: LoginMenuState;
  registerMenu: RegisterMenuState;
  contactWindow: ContactWindowState;
};

export const reducer = combineReducers<AppState>({
  burgerMenu,
  loginMenu,
  registerMenu,
  contactWindow,
});

export type RootState = ReturnType<typeof reducer>;
