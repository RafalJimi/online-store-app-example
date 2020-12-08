import React, {useMemo} from "react";
import { ShopCartItem } from "../../store/shopCart/reducer";
import { CartPageItem } from "./components/CartPageItem/index";
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

type ShopCartPageLayoutProps = {
  cartItems: ShopCartItem[];
  totalPrice: number;
};

export const ShopCartPageLayout = ({ cartItems, totalPrice }: ShopCartPageLayoutProps) => {
  
  const mappedItems = useMemo(
    () =>
      cartItems.map((cartItem) => (
        <CartPageItem key={cartItem.key} cartItem={cartItem} />
      )),
    [cartItems]
  );
  
  return (
    <ShopCartPageContainer>
      <ProductsListContainer>
        <ProductsListHeader>Shopping basket</ProductsListHeader>
        {cartItems && mappedItems}
      </ProductsListContainer>
      <OrderSummaryContainer>
        <OrderSummaryHeader>Order summary</OrderSummaryHeader>
        <OrderSummaryContainerElement>
          <span>Products</span>
          <span>{totalPrice.toFixed(2)} PLN</span>
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
          <span> {totalPrice.toFixed(2)} PLN</span>
        </TotalPrice>
        <OrderButton>Process order</OrderButton>
      </OrderSummaryContainer>
    </ShopCartPageContainer>
  );
};