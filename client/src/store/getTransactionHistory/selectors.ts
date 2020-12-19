import { AppState } from "../reducers";
import { TransactionDetails } from "../getTransactionDetails/reducer";

export const transactionHistoryRX = (state: AppState): TransactionDetails[] =>
  state.getTransactionHistory.transactions;
