import { UPLOAD_PRODUCT } from "./consts";

import { createAction } from "typesafe-actions";

export type ProductDetail = {
  id: number;
  text: string;
};

type ProductImage = {
  id: number;
  path: string;
};

export type UploadProductProps = {
  productData: {
    gender: string;
    category: string;
    subCategory: string;
    name: string;
    price: string;
    details: ProductDetail[];
    images: ProductImage[];
  };
};

export const uploadProductStarted = createAction(
  UPLOAD_PRODUCT.started,
  (productData): UploadProductProps => ({
    productData,
  })
)();
