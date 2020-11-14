import { GET_USER_DATA, CLEAR_USER_DATA_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { User } from "../types/user";
import { getUserDataStarted } from "./actions";

export type GetUserDataState = {
  user: User;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    postCode: "",
    gender: "",
    role: "",
  },
  isLoading: false,
  isError: "",
};

export const getUserData = (
  state = initialState,
  action: Action
): GetUserDataState => {
  switch (action.type) {
    case getType(getUserDataStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case GET_USER_DATA.success:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isError: "",
      };
    case GET_USER_DATA.failure:
      return {
        ...state,
        user: {
          email: "",
          firstName: "",
          lastName: "",
          city: "",
          address: "",
          postCode: "",
          gender: "",
          role: "",
        },
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_USER_DATA_STATE:
      return {
        ...state,
        user: {
          email: "",
          firstName: "",
          lastName: "",
          city: "",
          address: "",
          postCode: "",
          gender: "",
          role: "",
        },
        isLoading: false,
        isError: "",
      };
    default:
      return { ...state };
  }
};
