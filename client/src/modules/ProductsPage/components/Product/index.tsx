import React, { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartStarted } from "../../../../store/shopCart/actions";
import * as ProductsState from "../../../../store/getProducts/reducer";
import { ProductLayout } from "./layout";

type ProductProps = {
  product: ProductsState.Product;
};

export const Product = memo(({ product }: ProductProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    window.scrollTo(0, 0);
    history.push(`/product/details/id/${product._id}`);
  }, []);
  
    const handleAddToCart = useCallback(
      (size: string) => (e: React.MouseEvent) => {
        const itemData = {
          quantity: 1,
          size: size,
          product: product,
          key: Date.now(),
          sumPrice: product.price,
        };
        dispatch(addToCartStarted(itemData));
      },
      []
    );
  
  return (
    <ProductLayout
      img={product.images[0].path}
      name={product.productName}
      price={product.price}
      category={product.category}
      handleOnClick={handleOnClick}
      handleAddToCart={handleAddToCart}
    />
  );
});
