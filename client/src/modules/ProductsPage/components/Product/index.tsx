import React, { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as ProductsState from "../../../../store/getProducts/reducer";
import { ProductLayout } from "./layout";

type ProductProps = {
  product: ProductsState.Product;
};

export const Product = memo(({ product }: ProductProps) => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push(`/product/details/id/${product._id}`);
  }, []);
  
  return (
    <ProductLayout
      img={product.images[0].path}
      name={product.productName}
      price={product.price}
      handleOnClick={handleOnClick}
    />
  );
});
