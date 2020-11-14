import { AppState } from "../reducers";
import { User } from "../types/user";

export const deleteUserResultRX = (state: AppState): string =>
  state.deleteUser.message;

export const deleteUserIsErrorRX = (state: AppState): string =>
  state.deleteUser.isError;

export const deleteUserIsLoadingRX = (state: AppState): boolean =>
  state.deleteUser.isLoading;
