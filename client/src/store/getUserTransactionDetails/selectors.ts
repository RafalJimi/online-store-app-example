import { AppState } from "../reducers";
import { TransactionDetails } from "./reducer";

export const userTransactionDetailsRX = (state: AppState): TransactionDetails =>
  state.getUserTransactionDetails.transactionDetails;
