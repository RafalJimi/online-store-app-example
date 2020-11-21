import React from "react";
import * as ProductsState from "../../../../store/getProducts/reducer";
import { ProductLayout } from "./layout";

type ProductProps = {
  product: ProductsState.Product;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <ProductLayout
      img={product.images[0].path}
      name={product.productName}
      price={product.price}
    />
  );
};
