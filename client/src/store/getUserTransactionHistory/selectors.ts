import { AppState } from "../reducers";

export const userTransactionHistoryRX = (state: AppState): any =>
  state.getUserTransactionHistory.userTransactions;

export const userTransactionHistoryIsErrorRX = (state: AppState): string =>
  state.getUserTransactionHistory.isError;

export const userTransactionHistoryIsLoadingRX = (state: AppState): boolean =>
  state.getUserTransactionHistory.isLoading;
