import React from "react";
import Test from "../../../../assets/ActivatePage/ActivationPagePhoto.jpg";
import { ProductContainer } from "./layout.styled";

type ProductContainerLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  image: string;
  productName: string;
  price: number;
};

export const ProductContainerLayout = ({
  handleOnClick,
  image,
  productName,
  price,
}: ProductContainerLayoutProps) => (
  <ProductContainer onClick={handleOnClick}>
    <div>
      <img src={`http://localhost:5000/${image}`} alt=""></img>
    </div>
    <span>{productName}</span>
    <p>{price.toFixed(2)} PLN</p>
  </ProductContainer>
);
