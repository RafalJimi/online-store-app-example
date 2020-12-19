import { AppState } from "../reducers";
import { TransactionDetails } from "./reducer";

export const transactionDetailsRX = (state: AppState): TransactionDetails =>
  state.getTransactionDetails.transactionDetails;
