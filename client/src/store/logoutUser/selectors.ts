import { AppState } from "../reducers";

export const logoutUserResultRX = (state: AppState): boolean =>
  state.logoutUser.logoutSuccess;

export const logoutUserIsErrorRX = (state: AppState): boolean =>
  state.logoutUser.isError;
