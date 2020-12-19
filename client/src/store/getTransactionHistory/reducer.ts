import { GET_TRANSACTION_HISTORY } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getTransactionHistoryStarted } from "./actions";
import { TransactionDetails } from "../getTransactionDetails/reducer";

export type GetTransactionHistoryState = {
  isError: string;
  isLoading: boolean;
  transactions: TransactionDetails[];
};

export const initialState: GetTransactionHistoryState = {
  isError: "",
  isLoading: false,
  transactions: [],
};

export const getTransactionHistory = (
  state = initialState,
  action: Action
): GetTransactionHistoryState => {
  switch (action.type) {
    case getType(getTransactionHistoryStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        transactions: [],
      };
    case GET_TRANSACTION_HISTORY.success:
      return {
        ...state,
        isLoading: false,
        transactions: action.payload.transactions,
      };
    case GET_TRANSACTION_HISTORY.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
