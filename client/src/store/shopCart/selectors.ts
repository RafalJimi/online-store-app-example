import { AppState } from "../reducers";
import { ShopCartItem } from "./reducer";

export const shopCartIsLoadingRX = (state: AppState): boolean =>
  state.shopCart.isLoading;

export const shopCartItemsRX = (state: AppState): ShopCartItem[] =>
  state.shopCart.cart;
