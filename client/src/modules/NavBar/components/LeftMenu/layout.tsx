import React from "react";
import {
  LeftMenuContainer,
  LeftMenuSection,
  DropdownMenu,
  DropdownMenuContainer,
  DropdownMenuSection,
  DropdownMenuSectionHeader,
  DropdownMenuSectionItem,
} from "./layout.styled";

type LeftMenuLayoutProps = {
  handleOnClick: (
    gender: string,
    category?: string,
    subCategory?: string
  ) => (e: React.MouseEvent) => void;
};

export const LeftMenuLayout = ({ handleOnClick }: LeftMenuLayoutProps) => {
  const MenuForWoman = (
    <DropdownMenuContainer>
      <DropdownMenuSection>
        <DropdownMenuSectionHeader onHoverEffect={true}>
          NEW PRODUCTS
        </DropdownMenuSectionHeader>
      </DropdownMenuSection>
      <DropdownMenuSection>
        <DropdownMenuSectionHeader onHoverEffect={false}>
          COLLECTION
        </DropdownMenuSectionHeader>
        <DropdownMenuSectionItem onClick={handleOnClick("woman", "coats")}>
          Coats
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem onClick={handleOnClick("woman", "suits")}>
          Suits
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem onClick={handleOnClick("woman", "skirts")}>
          Skirts
        </DropdownMenuSectionItem>
      </DropdownMenuSection>
      <DropdownMenuSection>
        <DropdownMenuSectionHeader onHoverEffect={false}>
          SHOES
        </DropdownMenuSectionHeader>
        <DropdownMenuSectionItem onClick={handleOnClick("woman", "shoes")}>
          See it all
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem
          onClick={handleOnClick("woman", "shoes", "sport_shoes")}
        >
          Sport shoes
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem
          onClick={handleOnClick("woman", "shoes", "boots")}
        >
          Boots
        </DropdownMenuSectionItem>
      </DropdownMenuSection>
    </DropdownMenuContainer>
  );

  const MenuForMan = (
    <DropdownMenuContainer>
      <DropdownMenuSection>
        <DropdownMenuSectionHeader onHoverEffect={true}>
          NEW PRODUCTS
        </DropdownMenuSectionHeader>
      </DropdownMenuSection>
      <DropdownMenuSection>
        <DropdownMenuSectionHeader onHoverEffect={false}>
          COLLECTION
        </DropdownMenuSectionHeader>
        <DropdownMenuSectionItem onClick={handleOnClick("man", "coats")}>
          Coats
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem onClick={handleOnClick("man", "jackets")}>
          Jackets
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem onClick={handleOnClick("man", "suits")}>
          Suits
        </DropdownMenuSectionItem>
      </DropdownMenuSection>
      <DropdownMenuSection>
        <DropdownMenuSectionHeader onHoverEffect={false}>
          SHOES
        </DropdownMenuSectionHeader>
        <DropdownMenuSectionItem onClick={handleOnClick("man", "shoes")}>
          See it all
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem
          onClick={handleOnClick("man", "shoes", "sport_shoes")}
        >
          Sport shoes
        </DropdownMenuSectionItem>
        <DropdownMenuSectionItem
          onClick={handleOnClick("man", "shoes", "boots")}
        >
          Boots
        </DropdownMenuSectionItem>
      </DropdownMenuSection>
    </DropdownMenuContainer>
  );

  return (
    <LeftMenuContainer>
      <LeftMenuSection>
        <header onClick={handleOnClick("woman")}>
          WOMAN
        </header>
        <DropdownMenu>{MenuForWoman}</DropdownMenu>
      </LeftMenuSection>
      <LeftMenuSection>
        <header onClick={handleOnClick("man")}>
          MAN
        </header>
        <DropdownMenu>{MenuForMan}</DropdownMenu>
      </LeftMenuSection>
    </LeftMenuContainer>
  );
};
