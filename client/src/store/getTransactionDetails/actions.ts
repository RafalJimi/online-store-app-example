import { GET_TRANSACTION_DETAILS } from "./consts";

import { createAction } from "typesafe-actions";

export type TransactionDetailsProps = {
  transactionId: string;
};

export const getTransactionDetailsStarted = createAction(
  GET_TRANSACTION_DETAILS.started,
  (transactionId): TransactionDetailsProps => ({ transactionId })
)();
