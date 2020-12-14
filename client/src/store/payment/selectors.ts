import { AppState } from "../reducers";

export const paymentResultRX = (state: AppState): string =>
  state.payment.message;

export const paymentIsErrorRX = (state: AppState): string =>
  state.payment.isError;
