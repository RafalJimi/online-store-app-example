import { AppState } from "../reducers";
import { Product } from "./reducer";

export const productsListRX = (state: AppState): Product[] =>
  state.getProducts.products;

export const getProductsIsError = (state: AppState): string =>
  state.getProducts.isError;

export const loadMoreProductsRX = (state: AppState): boolean =>
  state.getProducts.loadMore;
