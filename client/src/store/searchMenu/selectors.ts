import { AppState } from "../reducers";

export const searchMenuIsOpenRX = (state: AppState): boolean =>
  state.searchMenu.isOpen;
