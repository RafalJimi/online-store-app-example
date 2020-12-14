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
  InfoContainer,
} from "./layout.styled";

type ShopCartPageLayoutProps = {
  cartItems: ShopCartItem[];
  totalPrice: number;
  handleOrderButton: (e: React.MouseEvent) => void;
  error: boolean;
  handleCreateAccount: (e: React.MouseEvent) => void;
};

export const ShopCartPageLayout = ({
  cartItems,
  totalPrice,
  handleOrderButton,
  error,
  handleCreateAccount,
}: ShopCartPageLayoutProps) => {
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
        <ProductsListHeader arrayLength={cartItems.length}>
          {cartItems.length === 0 ? "Your basket is empty" : "Shopping basket"}
        </ProductsListHeader>
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
        {cartItems.length > 0 && (
          <OrderButton onClick={handleOrderButton}>Process order</OrderButton>
        )}
        {error && (
          <InfoContainer>
            You are not logged in - please log in or{" "}
            <span onClick={handleCreateAccount}>create an account</span> if you
            are not registered.
          </InfoContainer>
        )}
      </OrderSummaryContainer>
    </ShopCartPageContainer>
  );
};