import { SEARCH_BY_TERM } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { searchByTermStarted } from "./actions";
import { Product } from "../getProducts/reducer";

export type SearchByTermState = {
  isError: string;
  isLoading: boolean;
  products: Product[];
};

export const initialState: SearchByTermState = {
  isError: "",
  isLoading: false,
  products: [],
};

export const searchByTerm = (
  state = initialState,
  action: Action
): SearchByTermState => {
  switch (action.type) {
    case getType(searchByTermStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case SEARCH_BY_TERM.success:
      return {
        ...state,
        products: action.payload.searchResults,
      };
    case SEARCH_BY_TERM.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
