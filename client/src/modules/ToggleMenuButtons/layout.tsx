import React from "react";
import { ToggleMenuButtonsContainer, ToggleMenuButton } from "./layout.styled";

type ToggleMenuButtonsLayoutProps = {
  loginMenuIsOpen: boolean;
  registerMenuIsOpen: boolean;
  handleLoginMenuButton: (e: React.MouseEvent) => void;
  handleRegisterMenuButton: (e: React.MouseEvent) => void;
};

export const ToggleMenuButtonsLayout = ({
  loginMenuIsOpen,
  registerMenuIsOpen,
  handleLoginMenuButton,
  handleRegisterMenuButton,
}: ToggleMenuButtonsLayoutProps) => (
  <ToggleMenuButtonsContainer>
    <ToggleMenuButton onClick={handleLoginMenuButton} prop={loginMenuIsOpen}>
      Begin the session
    </ToggleMenuButton>
    <ToggleMenuButton
      onClick={handleRegisterMenuButton}
      prop={registerMenuIsOpen}
    >
      Create an account
    </ToggleMenuButton>
  </ToggleMenuButtonsContainer>
);
