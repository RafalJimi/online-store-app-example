import { AppState } from "../reducers";
import { UserInformations } from "../getUserInformations/reducer";

export const userInformationsRX = (state: AppState): UserInformations =>
  state.getUserInformations.user;

export const getUserInformationsIsErrorRX = (state: AppState): string =>
  state.getUserInformations.isError;

export const getUserInformationsIsLoadingRX = (state: AppState): boolean =>
  state.getUserInformations.isLoading;
