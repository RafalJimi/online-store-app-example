import React, { ChangeEvent } from "react";
import {
  OrderFormContainer,
  OrderFormInputContainer,
  OrderFormButtonsContainer,
} from "./layout.styled";
import { Payment } from "../../../../utils/Payment/index";

export type PaymentDataProps = {
  email: string;
  fullName: string;
  phoneNumber: string;
  city: string;
  address: string;
  postCode: string;
};

type EditUserPanelLayoutProps = {
  handleOnChange: (text: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePhoneNumberInput: (e: ChangeEvent<HTMLInputElement>) => void;
  values: PaymentDataProps;
  errors: PaymentDataProps;
  isError: boolean;
};

export const OrderFormLayout = ({
  handleOnChange,
  handleEmailInput,
  handlePhoneNumberInput,
  values,
  errors,
  isError,
}: EditUserPanelLayoutProps) => (
  <OrderFormContainer>
    <OrderFormInputContainer prop={values.email}>
      <input
        type="text"
        placeholder="E-mail"
        value={values.email}
        onChange={handleEmailInput}
      />
      <div>{errors.email}</div>
    </OrderFormInputContainer>
    <OrderFormInputContainer prop={values.fullName}>
      <input
        type="text"
        placeholder="Full name"
        value={values.fullName}
        onChange={handleOnChange("fullName")}
      />
      <div>{errors.fullName}</div>
    </OrderFormInputContainer>
    <OrderFormInputContainer prop={values.phoneNumber}>
      <input
        type="text"
        placeholder="Phone number"
        value={values.phoneNumber}
        onChange={handlePhoneNumberInput}
      />
      <div>{errors.phoneNumber}</div>
    </OrderFormInputContainer>
    <OrderFormInputContainer prop={values.city}>
      <input
        type="text"
        placeholder="City"
        value={values.city}
        onChange={handleOnChange("city")}
      />
      <div>{errors.city}</div>
    </OrderFormInputContainer>
    <OrderFormInputContainer prop={values.address}>
      <input
        type="text"
        placeholder="Address"
        value={values.address}
        onChange={handleOnChange("address")}
      />
      <div>{errors.address}</div>
    </OrderFormInputContainer>
    <OrderFormInputContainer prop={values.postCode}>
      <input
        type="text"
        placeholder="Post code"
        value={values.postCode}
        onChange={handleOnChange("postCode")}
      />
      <div>{errors.postCode}</div>
    </OrderFormInputContainer>
    <OrderFormButtonsContainer>
      <Payment shippingData={values} />
    </OrderFormButtonsContainer>
  </OrderFormContainer>
);
