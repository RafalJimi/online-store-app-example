import { GET_USER_INFORMATIONS } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getUserInformationsStarted } from "./actions";

export type UserInformations = {
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  postCode: string;
};

export type GetUserInformationsState = {
  user: UserInformations;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  user: {
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    postCode: "",
  },
  isLoading: false,
  isError: "",
};

export const getUserInformations = (
  state = initialState,
  action: Action
): GetUserInformationsState => {
  switch (action.type) {
    case getType(getUserInformationsStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case GET_USER_INFORMATIONS.success:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isError: "",
      };
    case GET_USER_INFORMATIONS.failure:
      return {
        ...state,
        user: {
          firstName: "",
          lastName: "",
          city: "",
          address: "",
          postCode: "",
        },
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
