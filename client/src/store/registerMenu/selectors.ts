import { AppState } from "../reducers";

export const registerMenuIsOpenRX = (state: AppState): boolean =>
  state.registerMenu.isOpen;
