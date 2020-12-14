import { AppState } from "../reducers";
import { UserAddressData } from "./reducer";

export const userAddressRX = (state: AppState): UserAddressData =>
  state.getUserAddress.user;

export const userAddressIsErrorRX = (state: AppState): string =>
  state.getUserAddress.isError;
