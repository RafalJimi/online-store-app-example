import { GET_PRODUCT_DETAILS } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getProductDetailsStarted } from "./actions";
import { Product } from "../getProducts/reducer";

export type GetProductDetailsState = {
  isError: string;
  isLoading: boolean;
  product: Product;
};

export const initialState: GetProductDetailsState = {
  isError: "",
  isLoading: false,
  product: {
    productName: "",
    gender: 0,
    category: "",
    subCategory: "",
    price: 0,
    images: [],
    details: [],
    sold: 0,
    views: 0,
    _id: "",
  },
};

export const getProductDetails = (
  state = initialState,
  action: Action
): GetProductDetailsState => {
  switch (action.type) {
    case getType(getProductDetailsStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
        product: {
          productName: "",
          gender: 0,
          category: "",
          subCategory: "",
          price: 0,
          images: [],
          details: [],
          sold: 0,
          views: 0,
          _id: "",
        },
      };
    case GET_PRODUCT_DETAILS.success:
      return {
        ...state,
        product: action.payload.product,
        isLoading: false,
      };
    case GET_PRODUCT_DETAILS.failure:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
