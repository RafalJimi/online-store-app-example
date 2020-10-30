import { AppState } from "../reducers";

export const burgerMenuIsOpenRX = (state: AppState): boolean =>
  state.burgerMenu.isOpen;
