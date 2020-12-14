import { createAction } from "typesafe-actions";
import { PAYMENT } from "./consts";

export type PaymentStartedProps = {
  paymentData: {
    shippingData: {
      email: string;
      fullName: string;
      phoneNumber: string;
      city: string;
      address: string;
      postCode: string;
    };
    totalPrice: number;
  };
};

export const paymentStarted = createAction(
  PAYMENT.started,
  (paymentData): PaymentStartedProps => ({ paymentData })
)();
