import { AppState } from "../reducers";
import { User } from "../types/user";

export const userDataRX = (state: AppState): User => state.getUserData.user;

export const getUserDataIsErrorRX = (state: AppState): string =>
  state.getUserData.isError;

export const getUserDataIsLoadingRX = (state: AppState): boolean =>
  state.getUserData.isLoading;
