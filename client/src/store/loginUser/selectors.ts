import { AppState } from "../reducers";

export const loginUserTokenRX = (state: AppState): string =>
  state.loginUser.token;

export const loggedUserRX = (state: AppState): any => state.loginUser.user;

export const loginUserIsErrorRX = (state: AppState): string =>
  state.loginUser.isError;

export const loginUserIsLoadingRX = (state: AppState): boolean =>
  state.loginUser.isLoading;
