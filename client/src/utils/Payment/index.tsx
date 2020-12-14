import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { paymentStarted } from "../../store/payment/actions";
import {
  paymentResultRX,
  paymentIsErrorRX,
} from "../../store/payment/selectors";
import { getLocalStorage } from "../../helpers/auth";
import { PaymentDataProps } from "../../modules/OrderPage/components/OrderForm/layout";
import { PaymentLayout } from "./layout";
import { toast } from "react-toastify";

type PaymentProps = {
  shippingData: PaymentDataProps;
};

export const Payment = ({ shippingData }: PaymentProps) => {
  const [TotalPrice, setTotalPrice] = useState(0);

  const paymentResult = useSelector(paymentResultRX);
  const paymentIsError = useSelector(paymentIsErrorRX);

  const dispatch = useDispatch();
  const history = useHistory();

  let env = "sandbox";
  let currency = "PLN";
  const client = {
    sandbox: `${process.env.REACT_APP_PAYMENT_ID}`,
    production: "YOUR-PRODUCTION-APP-ID",
  };

  const onCancel = (data: any) => {};

  const onError = (err: any) => {};

  const paymentData = {
    shippingData: shippingData,
    totalPrice: TotalPrice,
  };

  const onSuccess = (data: any) => {
    dispatch(paymentStarted(paymentData));
  };

  useEffect(() => {
    setTotalPrice(getLocalStorage("totalPrice"));
  }, []);

  useEffect(() => {
    if (paymentResult) toast.dark(paymentResult);
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [paymentResult]);

  useEffect(() => {
    if (paymentIsError) toast.dark(paymentIsError);
  }, [paymentIsError]);

  return (
    <PaymentLayout
      env={env}
      client={client}
      currency={currency}
      totalPrice={TotalPrice}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
};
