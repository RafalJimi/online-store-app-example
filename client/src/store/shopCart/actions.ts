import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SET_QUANTITY,
  CLEAR_CART,
} from "./consts";
import { createAction } from "typesafe-actions";
import { ShopCartItem } from "./reducer";

export const getCartItemsStarted = createAction(
  GET_CART_ITEMS.started,
  () => ({})
)();

export type AddToCartStartedProps = {
  itemData: ShopCartItem;
};

export const addToCartStarted = createAction(
  ADD_TO_CART.started,
  (itemData): AddToCartStartedProps => ({
    itemData,
  })
)();

export type RemoveCartItemStartedProps = {
  itemData: ShopCartItem;
};

export const removeCartItemStarted = createAction(
  REMOVE_CART_ITEM.started,
  (itemData): RemoveCartItemStartedProps => ({
    itemData,
  })
)();

type SetQuantityProps = {
  key: number;
  quantity: number;
};

export const setQuantityStarted = createAction(
  SET_QUANTITY.started,
  (key, quantity): SetQuantityProps => ({
    key,
    quantity,
  })
)();

export const clearCart = createAction(CLEAR_CART, () => ({}))();
