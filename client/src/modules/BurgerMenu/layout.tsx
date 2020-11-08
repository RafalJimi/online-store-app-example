import React from "react";
import { CollectionMenu } from "./components/CollectionMenu/index";
import {
  BurgerMenuContainer,
  Menu,
  MenuElement,
  RegisterOrLoginReference,
  Contact,
} from "./layout.styled";

type BurgerMenuLayoutProps = {
  isOpen: boolean;
  handleOpenContactWindow: (e: React.MouseEvent) => void;
};

export const BurgerMenuLayout = ({
  isOpen,
  handleOpenContactWindow,
}: BurgerMenuLayoutProps) => (
  <BurgerMenuContainer isOpen={isOpen}>
    <Menu>
      <MenuElement>WOMAN</MenuElement>
      <MenuElement>MAN</MenuElement>
    </Menu>
    <RegisterOrLoginReference>Log in/Register</RegisterOrLoginReference>
    <CollectionMenu />
    <Contact onClick={handleOpenContactWindow}>Contact</Contact>
  </BurgerMenuContainer>
);
