import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SET_QUANTITY,
  CLEAR_CART,
} from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import {
  getCartItemsStarted,
  addToCartStarted,
  removeCartItemStarted,
  setQuantityStarted,
} from "./actions";
import { Product } from "../getProducts/reducer";

export type ShopCartItem = {
  quantity: number;
  product: Product;
  size: string;
  key: number;
  sumPrice: number;
};

export type ShopCartState = {
  isError: boolean;
  isLoading: boolean;
  cart: ShopCartItem[];
  numbersOfItems: number;
};

export const initialState: ShopCartState = {
  isError: false,
  isLoading: false,
  cart: [],
  numbersOfItems: 0,
};

export const shopCart = (
  state = initialState,
  action: Action
): ShopCartState => {
  switch (action.type) {
    case getType(getCartItemsStarted):
      return {
        ...state,
        isLoading: true,
      };
    case GET_CART_ITEMS.success:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        cart: action.payload.cart,
      };
    case GET_CART_ITEMS.failure:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case getType(addToCartStarted):
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TO_CART.success:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_TO_CART.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    case getType(removeCartItemStarted):
      return {
        ...state,
      };
    case REMOVE_CART_ITEM.success:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.key !== action.payload.id
        ),
      };
    case REMOVE_CART_ITEM.failure:
      return {
        ...state,
        isError: action.payload.error,
      };
    case getType(setQuantityStarted):
      return {
        ...state,
      };
    case SET_QUANTITY.success:
      console.log(action.payload);
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.key === action.payload.key
            ? {
                ...cartItem,
                quantity: action.payload.quantity,
                sumPrice: cartItem.product.price * action.payload.quantity,
              }
            : cartItem
        ),
      };
    case SET_QUANTITY.failure:
      return {
        ...state,
        isError: action.payload.error,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return { ...state };
  }
};
