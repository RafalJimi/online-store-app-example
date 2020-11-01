import { AppState } from "../reducers";

export const loginMenuIsOpenRX = (state: AppState): boolean =>
  state.loginMenu.isOpen;
