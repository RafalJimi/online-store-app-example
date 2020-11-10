import { AppState } from "../reducers";

export const forgetPasswordMessageRX = (state: AppState): string =>
  state.forgetPassword.message;

export const forgetPasswordIsErrorRX = (state: AppState): string =>
  state.forgetPassword.isError;

export const forgetPasswordIsLoadingRX = (state: AppState): boolean =>
  state.forgetPassword.isLoading;
