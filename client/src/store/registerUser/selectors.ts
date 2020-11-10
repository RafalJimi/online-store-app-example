import { AppState } from "../reducers";

export const registerResultMessageRX = (state: AppState): string =>
  state.registerUser.message;

export const registerResultIsErrorRX = (state: AppState): string =>
  state.registerUser.isError;

export const registerUserIsLoadingRX = (state: AppState): boolean =>
  state.registerUser.isLoading;
