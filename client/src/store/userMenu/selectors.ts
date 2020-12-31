import { AppState } from "../reducers";

export const userMenuIsOpenRX = (state: AppState): boolean =>
  state.userMenu.isOpen;
