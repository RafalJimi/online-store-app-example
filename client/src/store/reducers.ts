import { combineReducers } from "redux";

import { BurgerMenuState, burgerMenu } from "./burgerMenu/reducer";
import { LoginMenuState, loginMenu } from "./loginMenu/reducer";
import { RegisterMenuState, registerMenu } from "./registerMenu/reducer";
import { ContactWindowState, contactWindow } from "./contactWindow/reducer";
import { RegisterUserState, registerUser } from "./registerUser/reducer";
import { ActivationUserState, activationUser } from "./activationUser/reducer";
import { LoginUserState, loginUser } from "./loginUser/reducer";
import { LogoutUserState, logoutUser } from "./logoutUser/reducer";

export type AppState = {
  burgerMenu: BurgerMenuState;
  loginMenu: LoginMenuState;
  registerMenu: RegisterMenuState;
  contactWindow: ContactWindowState;
  registerUser: RegisterUserState;
  activationUser: ActivationUserState;
  loginUser: LoginUserState;
  logoutUser: LogoutUserState;
};

export const reducer = combineReducers<AppState>({
  burgerMenu,
  loginMenu,
  registerMenu,
  contactWindow,
  registerUser,
  activationUser,
  loginUser,
  logoutUser,
});

export type RootState = ReturnType<typeof reducer>;
