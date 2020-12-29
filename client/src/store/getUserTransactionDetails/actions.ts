import { GET_USER_TRANSACTION_DETAILS } from "./consts";

import { createAction } from "typesafe-actions";

export type UserTransactionDetailsProps = {
  transactionId: string;
};

export const getUserTransactionDetailsStarted = createAction(
  GET_USER_TRANSACTION_DETAILS.started,
  (transactionId): UserTransactionDetailsProps => ({ transactionId })
)();
