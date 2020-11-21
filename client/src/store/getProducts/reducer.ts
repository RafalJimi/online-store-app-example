import { GET_PRODUCTS, CLEAR_PRODUCTS_ARRAY } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getProductsStarted } from "./actions";
import { Image } from "../uploadImage/reducer";
import { ProductDetail } from "../uploadProduct/actions";

export type Product = {
  productName: string;
  gender: number;
  category: string;
  subCategory: string;
  price: number;
  images: Image[];
  details: ProductDetail[];
  sold: number;
  views: number;
  _id: string;
};

export type GetProductsState = {
  isError: string;
  isLoading: boolean;
  loadMore: boolean;
  products: Product[];
};

export const initialState: GetProductsState = {
  isError: "",
  isLoading: false,
  loadMore: true,
  products: [],
};

export const getProducts = (
  state = initialState,
  action: Action
): GetProductsState => {
  switch (action.type) {
    case getType(getProductsStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case GET_PRODUCTS.success:
      return {
        ...state,
        products: [...state.products, action.payload.product],
        loadMore: action.payload.loadMore,
      };
    case GET_PRODUCTS.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
        loadMore: false,
      };
    case CLEAR_PRODUCTS_ARRAY:
      return {
        ...state,
        products: [],
        isError: "",
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
