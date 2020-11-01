import React from "react";
import {
  RightMenu,
  RightMenuItem,
  BurgerButtonContainer,
  BurgerButton,
} from "./layout.styled";

type RightMenuLayoutProps = {
  ChangeLayout: boolean;
  burgerMenuIsOpen: boolean;
  handleToggleBurgerMenuButton: (e: React.MouseEvent) => void;
  handleOpenLoginMenuButton: (e: React.MouseEvent) => void;
};

export const RightMenuLayout = ({
  ChangeLayout,
  burgerMenuIsOpen,
  handleToggleBurgerMenuButton,
  handleOpenLoginMenuButton,
}: RightMenuLayoutProps) => (
  <RightMenu>
    <RightMenuItem>
      {ChangeLayout ? (
        <i className="fas fa-search" style={{ paddingRight: "8px" }}></i>
      ) : (
        <span>
          <i className="fas fa-search" style={{ paddingRight: "8px" }}></i>{" "}
          Search
        </span>
      )}
    </RightMenuItem>
    <RightMenuItem onClick={handleOpenLoginMenuButton}>
      {ChangeLayout ? <i className="far fa-user"></i> : "Sign in"}
    </RightMenuItem>
    <RightMenuItem>
      {ChangeLayout ? (
        <i className="fas fa-clipboard-list"></i>
      ) : (
        "My orders"
      )}
    </RightMenuItem>
    <RightMenuItem>
      {ChangeLayout ? <i className="fas fa-shopping-bag"></i> : "My basket"}
    </RightMenuItem>
    {ChangeLayout && (
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
    )}
  </RightMenu>
);
