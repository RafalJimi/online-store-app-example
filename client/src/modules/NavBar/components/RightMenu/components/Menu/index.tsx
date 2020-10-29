import React from "react";
import { MenuContainer } from "./menu.styled";

type MenuProps = {
  open: boolean;
};

export const Menu = ({ open }: MenuProps) => {
  return (
    <MenuContainer open={open}>
      <a href="#">Strona Główna</a>
      <a href="#">Portfolio</a>
      <a href="#">Sesja prywatna</a>
      <a href="#">Warsztaty Fotograficzne</a>
      <a href="#">Kontakt</a>
    </MenuContainer>
  );
};
