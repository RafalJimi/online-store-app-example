import React from "react";
import {
  RegisterContainer,
  CloseRegisterMenu,
  RegisterMenuContainer,
  CloseRegisterMenuButton,
} from "./layout.styled";

import { RegisterForm } from "./RegisterForm/index";
type RegisterMenuLayoutProps = {
  isOpen: boolean;
  handleCloseRegisterMenu: (e: React.MouseEvent) => void;
};

export const RegisterMenuLayout = ({
  isOpen,
  handleCloseRegisterMenu,
}: RegisterMenuLayoutProps) => (
  <RegisterContainer isOpen={isOpen}>
    <CloseRegisterMenu className="red" onClick={handleCloseRegisterMenu} />
    <RegisterMenuContainer>
      <CloseRegisterMenuButton onClick={handleCloseRegisterMenu}>
        <i className="fas fa-times" />
      </CloseRegisterMenuButton>
      <RegisterForm />
    </RegisterMenuContainer>
  </RegisterContainer>
);
