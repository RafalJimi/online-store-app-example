import React from "react";
import {
  LoginContainer,
  CloseLoginMenu,
  LoginMenuContainer,
  CloseLoginMenuButton,
} from "./layout.styled";
import { LoginForm } from "./LoginForm/index";

type LoginMenuLayoutProps = {
  isOpen: boolean;
  handleCloseLoginMenu: (e: React.MouseEvent) => void;
};

export const LoginMenuLayout = ({
  isOpen,
  handleCloseLoginMenu,
}: LoginMenuLayoutProps) => (
  <LoginContainer isOpen={isOpen}>
    <CloseLoginMenu className="red" onClick={handleCloseLoginMenu} />
    <LoginMenuContainer>
      <CloseLoginMenuButton onClick={handleCloseLoginMenu}>
        <i className="fas fa-times" />
      </CloseLoginMenuButton>
      <LoginForm />
    </LoginMenuContainer>
  </LoginContainer>
);
