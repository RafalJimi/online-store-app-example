import { UPLOAD_PRODUCT } from "./consts";

import { createAction } from "typesafe-actions";

type ProductImage = {
  id: number;
  path: string;
};

export type UploadProductProps = {
  productData: {
    gender: string;
    collection: string;
    subCategory: string;
    name: string;
    price: string;
    images: ProductImage[];
  };
};

export const uploadProductStarted = createAction(
  UPLOAD_PRODUCT.started,
  (productData): UploadProductProps => ({
    productData,
  })
)();
