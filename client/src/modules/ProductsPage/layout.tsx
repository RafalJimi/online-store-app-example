import React from "react";
import { ProductPageLayoutContainer, ProductsContainer } from "./layout.styled";
import { SearchPanel } from "./components/SearchPanel/index";
import { Product } from "./components/Product/index";

export const ProductPageLayout = () => {
  return (
    <ProductPageLayoutContainer>
      <SearchPanel />
      <ProductsContainer>
        <Product />
        <Product />
      </ProductsContainer>
    </ProductPageLayoutContainer>
  );
};
