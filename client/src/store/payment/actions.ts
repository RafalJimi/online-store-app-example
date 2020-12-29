import { createAction } from "typesafe-actions";
import { PAYMENT, CLEAR_PAYMENT_STATE } from "./consts";

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

export const clearPaymentState = createAction(
  CLEAR_PAYMENT_STATE,
  () => ({})
)();