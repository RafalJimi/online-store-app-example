import React from "react";
import {
  LoginMenuWrapped,
  CloseLoginMenu,
  LoginMenuContainer,
  CloseLoginMenuButton,
} from "./layout.styled";
import { LoginForm } from "./components/LoginForm/index";
import { ToggleMenuButtons } from '../ToggleMenuButtons/index'

type LoginMenuLayoutProps = {
  isOpen: boolean;
  handleCloseLoginMenu: (e: React.MouseEvent) => void;
};

export const LoginMenuLayout = ({
  isOpen,
  handleCloseLoginMenu,
}: LoginMenuLayoutProps) => (
  <LoginMenuWrapped prop={isOpen}>
    <CloseLoginMenu className="red" onClick={handleCloseLoginMenu} />
    <LoginMenuContainer>
      <CloseLoginMenuButton onClick={handleCloseLoginMenu}>
        <i className="fas fa-times" />
        </CloseLoginMenuButton>
        <ToggleMenuButtons />
      <LoginForm />
    </LoginMenuContainer>
  </LoginMenuWrapped>
);
