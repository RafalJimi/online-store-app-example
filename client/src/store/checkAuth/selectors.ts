import { AppState } from "../reducers";

export const userRoleRX = (state: AppState): string => state.checkAuth.role;

export const userRoleIsErrorRX = (state: AppState): string =>
  state.checkAuth.error;
