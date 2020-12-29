import React from "react";
import {
  BurgerMenuContainer,
  Menu,
  MenuElement,
  RegisterOrLoginReference,
  CollectionMenu,
  Contact,
} from "./layout.styled";

type BurgerMenuLayoutProps = {
  burgerMenuIsOpen: boolean;
  handleSetGender: (gender: string) => (e: React.MouseEvent) => void;
  gender: string;
  handleLoginReference: (e: React.MouseEvent) => void;
  isOpen: boolean;
  handleOnClick: (e: React.MouseEvent) => void;
  handleRedirect: (location: string) => (e: React.MouseEvent) => void;
  handleOpenContactWindow: (e: React.MouseEvent) => void;
};

export const BurgerMenuLayout = ({
  burgerMenuIsOpen,
  handleSetGender,
  gender,
  handleLoginReference,
  isOpen,
  handleOnClick,
  handleRedirect,
  handleOpenContactWindow,
}: BurgerMenuLayoutProps) => {
  
  const WomanCollection = (
    <div>
      <li
        onClick={handleRedirect(
          "/products?gender=woman&category=coats&subCategory=undefined"
        )}
      >
        Coats
      </li>
      <li
        onClick={handleRedirect(
          "/products?gender=woman&category=skirts&subCategory=undefined"
        )}
      >
        Skirts
      </li>
      <li
        onClick={handleRedirect(
          "/products?gender=woman&category=suits&subCategory=undefined"
        )}
      >
        Suits
      </li>
      <li
        onClick={handleRedirect(
          "/products?gender=woman&category=shoes&subCategory=undefined"
        )}
      >
        Shoes
      </li>
    </div>
  );
  
  const ManCollection = (
    <div>
      <li
        onClick={handleRedirect(
          "/products?gender=man&category=coats&subCategory=undefined"
        )}
      >
        Coats
      </li>
      <li
        onClick={handleRedirect(
          "/products?gender=man&category=jackets&subCategory=undefined"
        )}
      >
        Jackets
      </li>
      <li
        onClick={handleRedirect(
          "/products?gender=man&category=suits&subCategory=undefined"
        )}
      >
        Suits
      </li>
      <li
        onClick={handleRedirect(
          "/products?gender=man&category=shoes&subCategory=undefined"
        )}
      >
        Shoes
      </li>
    </div>
  );
  
  return (
    <BurgerMenuContainer isOpen={burgerMenuIsOpen}>
      <Menu>
        <MenuElement onClick={handleSetGender("woman")}>WOMAN</MenuElement>
        <MenuElement onClick={handleSetGender("man")}>MAN</MenuElement>
      </Menu>
      <RegisterOrLoginReference onClick={handleLoginReference}>
        Log in/Register
      </RegisterOrLoginReference>
      <CollectionMenu prop={isOpen}>
        <span onClick={handleOnClick}>
          {isOpen ? (
            <i className="fas fa-angle-up" />
          ) : (
            <i className="fas fa-angle-down" />
          )}
          COLLECTION
        </span>

        {gender === "woman" ? WomanCollection : ManCollection}
      </CollectionMenu>
      <Contact onClick={handleOpenContactWindow}>Contact</Contact>
    </BurgerMenuContainer>
  );
}
