import React, { ChangeEvent } from "react";
import {
  EditUserPanelContainer,
  EditUserPanelInputContainer,
  EditUserPanelSelectContainer,
  EditUserPanelButtonsContainer,
} from "./layout.styled";

type EditUserPanelLayoutProps = {
  handleOnChange: (text: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectRole: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSelectGender: (e: ChangeEvent<HTMLSelectElement>) => void;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  postCode: string;
  role: string;
  gender: string;
  handleGetUserButton: (e: React.MouseEvent) => void;
  handleDeleteAccountButton: (e: React.MouseEvent) => void;
  handleEditUserButton: (e: React.MouseEvent) => void;
};

export const EditUserPanelLayout = ({
  handleOnChange,
  handleSelectRole,
  handleSelectGender,
  email,
  firstName,
  lastName,
  city,
  address,
  postCode,
  role,
  gender,
  handleGetUserButton,
  handleDeleteAccountButton,
  handleEditUserButton,
}: EditUserPanelLayoutProps) => (
  <EditUserPanelContainer>
    <EditUserPanelInputContainer prop={email}>
      <input
        type="text"
        placeholder="User e-mail"
        value={email}
        onChange={handleOnChange("email")}
      />
    </EditUserPanelInputContainer>
    <EditUserPanelInputContainer prop={firstName}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={handleOnChange("firstName")}
      />
    </EditUserPanelInputContainer>
    <EditUserPanelInputContainer prop={lastName}>
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={handleOnChange("lastName")}
      />
    </EditUserPanelInputContainer>
    <EditUserPanelInputContainer prop={city}>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={handleOnChange("city")}
      />
    </EditUserPanelInputContainer>
    <EditUserPanelInputContainer prop={address}>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={handleOnChange("address")}
      />
    </EditUserPanelInputContainer>
    <EditUserPanelInputContainer prop={postCode}>
      <input
        type="text"
        placeholder="Post code"
        value={postCode}
        onChange={handleOnChange("postCode")}
      />
    </EditUserPanelInputContainer>
    <EditUserPanelSelectContainer>
      <select onChange={handleSelectRole} value={role}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </EditUserPanelSelectContainer>
    <EditUserPanelSelectContainer>
      <select onChange={handleSelectGender} value={gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </EditUserPanelSelectContainer>
    <EditUserPanelButtonsContainer>
      <button onClick={handleGetUserButton}>Get user</button>
      <button onClick={handleDeleteAccountButton}>Delete account</button>
      <button onClick={handleEditUserButton}>Edit user</button>
    </EditUserPanelButtonsContainer>
  </EditUserPanelContainer>
);
