import React from "react";
import {
  DetailPageContainer,
  ProductImagesContainer,
  ImgContainer,
  ProductDetailsContainer,
  ProductNameContainer,
  ProductPriceContainer,
  ProductSizesContainer,
  AddToCartButton,
} from "./layout.styled";
import { Informations } from "./components/Informations/index";
import { Product } from "../../store/getProducts/reducer";

type DetailProductPageLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  productDetails: Product;
};

export const DetailProductPageLayout = ({
  handleOnClick,
  productDetails,
}: DetailProductPageLayoutProps) => (
  <DetailPageContainer>
    <ProductImagesContainer>
      {productDetails.images.map((image) => (
        <ImgContainer onClick={handleOnClick}>
          <img src={`http://localhost:5000/${image.path}`} alt="" />
        </ImgContainer>
      ))}
    </ProductImagesContainer>
    <ProductDetailsContainer>
      <ProductNameContainer>{productDetails.productName}</ProductNameContainer>
      <ProductPriceContainer>
        {productDetails.price.toFixed(2)} PLN
      </ProductPriceContainer>
      <ProductSizesContainer>
        {productDetails.category === "shoes" ? (
          <>
            <div>38</div>
            <div>39</div>
            <div>40</div>
            <div>41</div>
            <div>42</div>
          </>
        ) : (
          <>
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </>
        )}
      </ProductSizesContainer>
      <AddToCartButton>ADD TO CART</AddToCartButton>
      <Informations />
    </ProductDetailsContainer>
  </DetailPageContainer>
);
