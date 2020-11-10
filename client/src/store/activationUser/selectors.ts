import { AppState } from "../reducers";

export const activationUserMessageRX = (state: AppState): string =>
  state.activationUser.message;

export const activationUserIsErrorRX = (state: AppState): string =>
  state.activationUser.isError;

export const activationUserIsLoadingRX = (state: AppState): boolean =>
  state.activationUser.isLoading;
