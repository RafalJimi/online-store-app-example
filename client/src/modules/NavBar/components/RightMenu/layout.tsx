import React from "react";
import {
  RightMenu,
  RightMenuItem,
  BurgerButtonContainer,
  BurgerButton,
} from "./layout.styled";

type RightMenuLayoutProps = {
  ChangeLayout: boolean;
  BurgerMenuIsOpen: boolean;
  handleToggleBurgerMenuButton: (e: React.MouseEvent) => void;
};

export const RightMenuLayout = ({
  ChangeLayout,
  BurgerMenuIsOpen,
  handleToggleBurgerMenuButton,
}: RightMenuLayoutProps) => (
  <RightMenu>
    <RightMenuItem>
      {ChangeLayout ? (
        <i className="fas fa-search" style={{ paddingRight: "8px" }}></i>
      ) : (
        <span>
          <i className="fas fa-search" style={{ paddingRight: "8px" }}></i>{" "}
          Szukaj
        </span>
      )}
    </RightMenuItem>
    <RightMenuItem>
      {ChangeLayout ? <i className="far fa-user"></i> : "Zaloguj się"}
    </RightMenuItem>
    <RightMenuItem>
      {ChangeLayout ? (
        <i className="fas fa-clipboard-list"></i>
      ) : (
        "Moje zamówienia"
      )}
    </RightMenuItem>
    <RightMenuItem>
      {ChangeLayout ? <i className="fas fa-shopping-bag"></i> : "Mój koszyk"}
    </RightMenuItem>
    {ChangeLayout && (
      <BurgerButtonContainer>
        <BurgerButton
          isOpen={BurgerMenuIsOpen}
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
