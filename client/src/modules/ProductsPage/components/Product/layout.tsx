import React from "react";
import {
  ProductContainer,
  ProductImgContainer,
  AddItemToCartContainer,
  ProductDetailsContainer,
} from "./layout.styled";

type ProductLayoutProps = {
  img: string;
  name: string;
  price: number;
};

export const ProductLayout = ({ img, name, price }: ProductLayoutProps) => (
  <ProductContainer>
    <ProductImgContainer>
      <img src={`http://localhost:5000/${img}`} alt="" />
      <AddItemToCartContainer className="addToCart">
        <span>ADD QUICKLY</span>
        <div>
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
        </div>
      </AddItemToCartContainer>
    </ProductImgContainer>
    <ProductDetailsContainer>
      <span>{name}</span>
      <div>PLN {price.toFixed(2)}</div>
    </ProductDetailsContainer>
  </ProductContainer>
);
