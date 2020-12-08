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
  category: string;
  handleOnClick: (e: React.MouseEvent) => void;
  handleAddToCart: (size: string) => (e: React.MouseEvent) => void;
};

export const ProductLayout = ({
  img,
  name,
  price,
  category,
  handleOnClick,
  handleAddToCart,
}: ProductLayoutProps) => (
  <ProductContainer>
    <ProductImgContainer>
      <img
        onClick={handleOnClick}
        src={`http://localhost:5000/${img}`}
        alt=""
      />
      <AddItemToCartContainer className="addToCart">
        <span>ADD QUICKLY</span>
        {category === "shoes" ? (
          <div>
            <div onClick={handleAddToCart("38")}>38</div>
            <div onClick={handleAddToCart("39")}>39</div>
            <div onClick={handleAddToCart("40")}>40</div>
            <div onClick={handleAddToCart("41")}>41</div>
            <div onClick={handleAddToCart("42")}>42</div>
          </div>
        ) : (
          <div>
            <div onClick={handleAddToCart("XS")}>XS</div>
            <div onClick={handleAddToCart("S")}>S</div>
            <div onClick={handleAddToCart("M")}>M</div>
            <div onClick={handleAddToCart("L")}>L</div>
            <div onClick={handleAddToCart("XL")}>XL</div>
          </div>
        )}
      </AddItemToCartContainer>
    </ProductImgContainer>
    <ProductDetailsContainer>
      <span onClick={handleOnClick}>{name}</span>
      <div onClick={handleOnClick}>PLN {price.toFixed(2)}</div>
    </ProductDetailsContainer>
  </ProductContainer>
);
