import React from "react";
import {
  RightMenuContainer,
  RightMenuItem,
  BurgerButtonContainer,
  BurgerButton,
} from "./layout.styled";

type RightMenuLayoutProps = {
  burgerMenuIsOpen: boolean;
  handleToggleBurgerMenuButton: (e: React.MouseEvent) => void;
  handleOpenLoginMenuButton: (e: React.MouseEvent) => void;
  handleRedirect: (url: string) => (e: React.MouseEvent) => void;
};

export const RightMenuLayout = ({
  burgerMenuIsOpen,
  handleToggleBurgerMenuButton,
  handleOpenLoginMenuButton,
  handleRedirect,
}: RightMenuLayoutProps) => (
  <RightMenuContainer>
    <RightMenuItem showIcon={true}>
      <i className="fas fa-search"></i> <span>Search</span>
    </RightMenuItem>
    <RightMenuItem showIcon={false} onClick={handleOpenLoginMenuButton}>
      <i className="far fa-user"></i> <span>Sign in</span>
    </RightMenuItem>
    <RightMenuItem showIcon={false}>
      <i className="fas fa-clipboard-list"></i> <span>My orders</span>
    </RightMenuItem>
    <RightMenuItem showIcon={false} onClick={handleRedirect("/shop-cart")}>
      <i className="fas fa-shopping-bag"></i> <span>My basket</span>
    </RightMenuItem>
    <BurgerButtonContainer>
      <BurgerButton
        isOpen={burgerMenuIsOpen}
        onClick={handleToggleBurgerMenuButton}
      >
        <div />
        <div />
        <div />
      </BurgerButton>
    </BurgerButtonContainer>
  </RightMenuContainer>
);
