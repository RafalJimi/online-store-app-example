import { AppState } from "../reducers";

export const updateUserInformationsResultRX = (state: AppState): string =>
  state.updateUserInformations.message;

export const updateUserInformationsIsErrorRX = (state: AppState): string =>
  state.updateUserInformations.isError;

export const updateUserInformationsIsLoadingRX = (state: AppState): boolean =>
  state.updateUserInformations.isLoading;
