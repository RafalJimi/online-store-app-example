import React from "react";
//@ts-ignore
import PaypalExpressBtn from "react-paypal-express-checkout";
import { PaypalButtonContainer } from "./layout.styled";

type PaymentLayoutProps = {
  env: string;
  client: { sandbox: string; production: string };
  currency: string;
  totalPrice: number;
  onError: (data: any) => void;
  onCancel: (err: any) => void;
  onSuccess: (data: any) => void;
};

export const PaymentLayout = ({
  env,
  client,
  currency,
  totalPrice,
  onError,
  onSuccess,
  onCancel,
}: PaymentLayoutProps) => (
  <PaypalButtonContainer>
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={totalPrice}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
      style={{
        size: "responsive",
        color: "black",
        shape: "rect",
        label: "checkout",
      }}
    />
  </PaypalButtonContainer>
);
