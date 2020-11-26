import { GET_PRODUCTS, CLEAR_PRODUCTS_ARRAY } from "./consts";

import { createAction } from "typesafe-actions";

export type GetProductsProps = {
  getProductsQueries: {
    skip: number;
    limit: number;
    gender: string;
    category: string;
    subCategory: string;
  };
};

export const getProductsStarted = createAction(
  GET_PRODUCTS.started,
  (getProductsQueries): GetProductsProps => ({
    getProductsQueries,
  })
)();

export const clearProductsArray = createAction(
  CLEAR_PRODUCTS_ARRAY,
  () => ({})
)();
