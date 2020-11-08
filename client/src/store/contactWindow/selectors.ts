import { AppState } from "../reducers";

export const contactWindowIsOpenRX = (state: AppState): boolean =>
  state.contactWindow.isOpen;
