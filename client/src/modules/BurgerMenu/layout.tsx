import React from "react";
import { BurgerMenuContainer } from "./layout.styled";

type BurgerMenuLayoutProps = {
  isOpen: boolean;
};

export const BurgerMenuLayout = ({ isOpen }: BurgerMenuLayoutProps) => (
  <BurgerMenuContainer isOpen={isOpen}>
    <h1>Close</h1>
  </BurgerMenuContainer>
);
