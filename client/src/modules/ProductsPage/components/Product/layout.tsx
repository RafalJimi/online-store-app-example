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
};

export const ProductLayout = ({
  img,
  name,
  price,
  category,
  handleOnClick,
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
            <div>38</div>
            <div>39</div>
            <div>40</div>
            <div>41</div>
            <div>42</div>
          </div>
        ) : (
          <div>
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
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
