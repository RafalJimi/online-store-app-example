import { createAction } from "typesafe-actions";
import { GET_USER_TRANSACTION_HISTORY } from "./consts";

export const getUserTransactionHistoryStarted = createAction(
  GET_USER_TRANSACTION_HISTORY.started,
  () => ({})
)();
