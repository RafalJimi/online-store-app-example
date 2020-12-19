import { GET_TRANSACTION_HISTORY } from "./consts";

import { createAction } from "typesafe-actions";

export const getTransactionHistoryStarted = createAction(
  GET_TRANSACTION_HISTORY.started,
  () => ({})
)();
