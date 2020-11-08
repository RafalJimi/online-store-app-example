import React from "react";
import {
  RegisterContainer,
  CloseRegisterMenu,
  RegisterMenuContainer,
  CloseRegisterMenuButton,
} from "./layout.styled";
import { ToggleMenuButtons } from "../ToggleMenuButtons/index";

import { RegisterForm } from "./components/RegisterForm/index";
type RegisterMenuLayoutProps = {
  isOpen: boolean;
  handleCloseRegisterMenu: (e: React.MouseEvent) => void;
};

export const RegisterMenuLayout = ({
  isOpen,
  handleCloseRegisterMenu,
}: RegisterMenuLayoutProps) => (
  <RegisterContainer prop={isOpen}>
    <CloseRegisterMenu className="red" onClick={handleCloseRegisterMenu} />
    <RegisterMenuContainer>
      <CloseRegisterMenuButton onClick={handleCloseRegisterMenu}>
        <i className="fas fa-times" />
      </CloseRegisterMenuButton>
      <ToggleMenuButtons />
      <RegisterForm />
    </RegisterMenuContainer>
  </RegisterContainer>
);
