import { AppState } from "../reducers";
import { Product } from "../getProducts/reducer";

export const productDetailsRX = (state: AppState): Product =>
  state.getProductDetails.product;

export const getProductDetailsIsError = (state: AppState): string =>
  state.getProductDetails.isError;
