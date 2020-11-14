import { AppState } from "../reducers";

export const updateUserDataResultRX = (state: AppState): string =>
  state.updateUserData.message;

export const updateUserDataIsErrorRX = (state: AppState): string =>
  state.updateUserData.isError;

export const updateUserDataIsLoadingRX = (state: AppState): boolean =>
  state.updateUserData.isLoading;
