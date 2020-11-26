import { GET_PRODUCT_DETAILS } from "./consts";

import { createAction } from "typesafe-actions";

export type GetProductDetailsProps = {
  productId: string;
};

export const getProductDetailsStarted = createAction(
  GET_PRODUCT_DETAILS.started,
  (productId): GetProductDetailsProps => ({
    productId,
  })
)();
