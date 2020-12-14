import React from "react";
import {
  OrderPageContainer,
  OrderPageContent,
  OrderPageTitle,
} from "./layout.styled";
import { OrderForm } from "./components/OrderForm/index";

export const OrderPageLayout = () => (
  <OrderPageContainer>
    <OrderPageContent>
      <OrderPageTitle>Order form</OrderPageTitle>
      <OrderForm />
    </OrderPageContent>
  </OrderPageContainer>
);
