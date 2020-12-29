import React, { ChangeEvent } from "react";
import {
  InformationsFormContainer,
  FormInputContainer,
  ButtonsContainer,
} from "./layout.styled";

type InformationsFormLayoutProps = {
  handleOnChange: (text: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  postCode: string;
  handleGetUserInformations: (e: React.MouseEvent) => void;
  handleUpdateUserInformations: (e: React.MouseEvent) => void;
};

export const InformationsFormLayout = ({
  handleOnChange,
  firstName,
  lastName,
  city,
  address,
  postCode,
  handleGetUserInformations,
  handleUpdateUserInformations,
}: InformationsFormLayoutProps) => (
  <InformationsFormContainer>
    <FormInputContainer prop={firstName}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={handleOnChange("firstName")}
      />
    </FormInputContainer>
    <FormInputContainer prop={lastName}>
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={handleOnChange("lastName")}
      />
    </FormInputContainer>
    <FormInputContainer prop={city}>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={handleOnChange("city")}
      />
    </FormInputContainer>
    <FormInputContainer prop={address}>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={handleOnChange("address")}
      />
    </FormInputContainer>
    <FormInputContainer prop={postCode}>
      <input
        type="text"
        placeholder="Post code"
        value={postCode}
        onChange={handleOnChange("postCode")}
      />
    </FormInputContainer>
    <ButtonsContainer>
      <button onClick={handleGetUserInformations}>
        Get current informations
      </button>
      <button onClick={handleUpdateUserInformations}>
        Update informations
      </button>
    </ButtonsContainer>
  </InformationsFormContainer>
);
