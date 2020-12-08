import React from "react";
import {
  DetailPageContainer,
  ProductImagesContainer,
  ImgContainer,
  ProductDetailsContainer,
  ProductNameContainer,
  ProductPriceContainer,
  ProductSizesContainer,
  SizeButton,
  AddToCartButton,
} from "./layout.styled";
import { Informations } from "./components/Informations/index";
import { Product } from "../../store/getProducts/reducer";

type DetailProductPageLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  productDetails: Product;
  handleSetSize: (size: string) => (e: React.MouseEvent) => void;
  handleAddToCart: (e: React.MouseEvent) => void;
  size: string;
};

export const DetailProductPageLayout = ({
  handleOnClick,
  productDetails,
  handleSetSize,
  handleAddToCart,
  size,
}: DetailProductPageLayoutProps) => (
  <DetailPageContainer>
    <ProductImagesContainer>
      {productDetails.images.map((image) => (
        <ImgContainer onClick={handleOnClick} key={image.id}>
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
            <SizeButton
              props={{ size: size, value: "38" }}
              onClick={handleSetSize("38")}
            >
              38
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "39" }}
              onClick={handleSetSize("39")}
            >
              39
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "40" }}
              onClick={handleSetSize("40")}
            >
              40
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "41" }}
              onClick={handleSetSize("41")}
            >
              41
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "42" }}
              onClick={handleSetSize("42")}
            >
              42
            </SizeButton>
          </>
        ) : (
          <>
            <SizeButton
              props={{ size: size, value: "XS" }}
              onClick={handleSetSize("XS")}
            >
              XS
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "S" }}
              onClick={handleSetSize("S")}
            >
              S
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "M" }}
              onClick={handleSetSize("M")}
            >
              M
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "L" }}
              onClick={handleSetSize("L")}
            >
              L
            </SizeButton>
            <SizeButton
              props={{ size: size, value: "XL" }}
              onClick={handleSetSize("XL")}
            >
              XL
            </SizeButton>
          </>
        )}
      </ProductSizesContainer>
      <AddToCartButton onClick={handleAddToCart}>ADD TO CART</AddToCartButton>
      <Informations />
    </ProductDetailsContainer>
  </DetailPageContainer>
);
