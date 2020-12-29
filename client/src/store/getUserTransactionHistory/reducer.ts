import { GET_USER_TRANSACTION_HISTORY } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getUserTransactionHistoryStarted } from "./actions";

export type GetUserTransactionHistoryState = {
  userTransactions: any;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  userTransactions: [],
  isLoading: false,
  isError: "",
};

export const getUserTransactionHistory = (
  state = initialState,
  action: Action
): GetUserTransactionHistoryState => {
  switch (action.type) {
    case getType(getUserTransactionHistoryStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        userTransactions: [],
      };
    case GET_USER_TRANSACTION_HISTORY.success:
      return {
        ...state,
        userTransactions: action.payload.user,
        isLoading: false,
        isError: "",
      };
    case GET_USER_TRANSACTION_HISTORY.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
