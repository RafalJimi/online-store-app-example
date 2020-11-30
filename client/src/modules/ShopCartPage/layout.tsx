import React from "react";
import {
  ShopCartPageContainer,
  ProductsListContainer,
  OrderSummaryContainer,
  ProductsListHeader,
  OrderSummaryHeader,
  OrderSummaryContainerElement,
  TotalPrice,
  OrderButton,
} from "./layout.styled";

export const ShopCartPageLayout = () => (
  <ShopCartPageContainer>
    <ProductsListContainer>
      <ProductsListHeader>Shopping basket</ProductsListHeader>
    </ProductsListContainer>
    <OrderSummaryContainer>
      <OrderSummaryHeader>Order summary</OrderSummaryHeader>
      <OrderSummaryContainerElement>
        <span>Products</span>
        <span>999,00 PLN</span>
      </OrderSummaryContainerElement>
      <OrderSummaryContainerElement>
        <span>Estimated delivery costs</span>
        <span>9,99 PLN</span>
      </OrderSummaryContainerElement>
      <OrderSummaryContainerElement>
        <span>FREE STANDARD SHIPPING</span>
        <span> -9,99 PLN</span>
      </OrderSummaryContainerElement>
      <TotalPrice>
        <span>
          <span>TOTAL</span>
          <p>(VAT included)</p>
        </span>
        <span> 999,00 PLN</span>
      </TotalPrice>
      <OrderButton>Process order</OrderButton>
    </OrderSummaryContainer>
  </ShopCartPageContainer>
);
