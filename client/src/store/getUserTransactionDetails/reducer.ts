import { GET_USER_TRANSACTION_DETAILS } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getUserTransactionDetailsStarted } from "./actions";
import { ShopCartItem } from "../shopCart/reducer";

export type TransactionDetails = {
  products: ShopCartItem[];
  user: {
    fullName: string;
    email: string;
  };
  shippingAddress: {
    email: string;
    fullName: string;
    phoneNumber: string;
    city: string;
    address: string;
    postCode: string;
  };
  price: number;
  _id: string;
  createdAt: string;
};

export type GetUserTransactionDetailsState = {
  isError: string;
  isLoading: boolean;
  transactionDetails: TransactionDetails;
};

export const initialState: GetUserTransactionDetailsState = {
  isError: "",
  isLoading: false,
  transactionDetails: {
    products: [],
    user: {
      fullName: "",
      email: "",
    },
    shippingAddress: {
      email: "",
      fullName: "",
      phoneNumber: "",
      city: "",
      address: "",
      postCode: "",
    },
    price: 0,
    _id: "",
    createdAt: "",
  },
};

export const getUserTransactionDetails = (
  state = initialState,
  action: Action
): GetUserTransactionDetailsState => {
  switch (action.type) {
    case getType(getUserTransactionDetailsStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        transactionDetails: {
          products: [],
          user: {
            fullName: "",
            email: "",
          },
          shippingAddress: {
            email: "",
            fullName: "",
            phoneNumber: "",
            city: "",
            address: "",
            postCode: "",
          },
          price: 0,
          _id: "",
          createdAt: "",
        },
      };
    case GET_USER_TRANSACTION_DETAILS.success:
      return {
        ...state,
        isLoading: false,
        transactionDetails: action.payload.details,
      };
    case GET_USER_TRANSACTION_DETAILS.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
