import { AppState } from "../reducers";

export const uploadProductResultRX = (state: AppState): string =>
  state.uploadProduct.message;

export const uploadProductIsErrorRX = (state: AppState): string =>
  state.uploadProduct.isError;
