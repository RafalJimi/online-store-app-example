import { GET_USER_ADDRESS, CLEAR_USER_ADDRESS_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getUserAddressStarted } from "./actions";

export type UserAddressData = {
  email: string;
  fullName: string;
  city: string;
  address: string;
  postCode: string;
};

export type GetUserAddressState = {
  user: UserAddressData;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  user: {
    email: "",
    fullName: "",
    city: "",
    address: "",
    postCode: "",
  },
  isLoading: false,
  isError: "",
};

export const getUserAddress = (
  state = initialState,
  action: Action
): GetUserAddressState => {
  switch (action.type) {
    case getType(getUserAddressStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        user: {
          email: "",
          fullName: "",
          city: "",
          address: "",
          postCode: "",
        },
      };
    case GET_USER_ADDRESS.success:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };
    case GET_USER_ADDRESS.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_USER_ADDRESS_STATE:
      return {
        ...state,
        user: {
          email: "",
          fullName: "",
          city: "",
          address: "",
          postCode: "",
        },
        isLoading: false,
        isError: "",
      };
    default:
      return { ...state };
  }
};
