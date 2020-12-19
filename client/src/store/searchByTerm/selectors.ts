import { AppState } from "../reducers";
import { Product } from "../getProducts/reducer";

export const searchByTermResultRX = (state: AppState): Product[] =>
  state.searchByTerm.products;

export const searchByTermErrorRX = (state: AppState): string =>
  state.searchByTerm.isError;

export const searchByTermIsLoadingRX = (state: AppState): boolean =>
  state.searchByTerm.isLoading;
