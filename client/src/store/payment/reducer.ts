import { PAYMENT, CLEAR_PAYMENT_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { paymentStarted } from "./actions";

export type PaymentState = {
  message: string;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  message: "",
  isLoading: false,
  isError: "",
};

export const payment = (state = initialState, action: Action): PaymentState => {
  switch (action.type) {
    case getType(paymentStarted):
      return {
        ...state,
        message: "",
        isLoading: true,
        isError: "",
      };
    case PAYMENT.success:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
      };
    case PAYMENT.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_PAYMENT_STATE:
      return {
        ...state,
        message: "",
        isLoading: false,
        isError: "",
      };
    default:
      return { ...state };
  }
};
