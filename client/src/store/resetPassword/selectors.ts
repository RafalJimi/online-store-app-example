import { AppState } from "../reducers";

export const resetPasswordMessageRX = (state: AppState): string =>
  state.resetPassword.message;

export const resetPasswordIsErrorRX = (state: AppState): string =>
  state.resetPassword.isError;

export const resetPasswordIsLoadingRX = (state: AppState): boolean =>
  state.resetPassword.isLoading;
