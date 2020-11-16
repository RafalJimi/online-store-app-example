import React from "react";
import {
  ProductContainer,
  ProductImgContainer,
  AddItemToCartContainer,
  ProductDetailsContainer,
} from "./layout.styled";
import TestIMG from "../../../../assets/ManCollectionImgs/coatman.jpg";

export const ProductLayout = () => (
  <ProductContainer>
    <ProductImgContainer>
      <img src={TestIMG} alt="" />
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
      <span>Smooth coat made of 100% wool</span>
      <div>PLN 999.00</div>
    </ProductDetailsContainer>
  </ProductContainer>
);
