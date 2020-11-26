import React from "react";
import {
  LeftMenu,
  LeftMenuItem,
  DropdownMenu,
  DropdownMenuContainer,
  DropdownMenuColumn,
  DropdownMenuColumnTitle,
  DropdownMenuColumnItem,
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
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle onHoverEffect={true}>
          NEW PRODUCTS
        </DropdownMenuColumnTitle>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle onHoverEffect={false}>
          COLLECTION
        </DropdownMenuColumnTitle>
        <DropdownMenuColumnItem onClick={handleOnClick("woman", "coats")}>
          Coats
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem onClick={handleOnClick("woman", "suits")}>
          Suits
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem onClick={handleOnClick("woman", "skirts")}>
          Skirts
        </DropdownMenuColumnItem>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle onHoverEffect={false}>
          SHOES
        </DropdownMenuColumnTitle>
        <DropdownMenuColumnItem onClick={handleOnClick("woman", "shoes")}>
          See it all
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem
          onClick={handleOnClick("woman", "shoes", "sport_shoes")}
        >
          Sport shoes
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem
          onClick={handleOnClick("woman", "shoes", "boots")}
        >
          Boots
        </DropdownMenuColumnItem>
      </DropdownMenuColumn>
    </DropdownMenuContainer>
  );

  const MenuForMan = (
    <DropdownMenuContainer>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle onHoverEffect={true}>
          NEW PRODUCTS
        </DropdownMenuColumnTitle>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle onHoverEffect={false}>
          COLLECTION
        </DropdownMenuColumnTitle>
        <DropdownMenuColumnItem onClick={handleOnClick("man", "coats")}>
          Coats
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem onClick={handleOnClick("man", "jackets")}>
          Jackets
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem onClick={handleOnClick("man", "suits")}>
          Suits
        </DropdownMenuColumnItem>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle onHoverEffect={false}>
          SHOES
        </DropdownMenuColumnTitle>
        <DropdownMenuColumnItem onClick={handleOnClick("man", "shoes")}>
          See it all
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem
          onClick={handleOnClick("man", "shoes", "sport_shoes")}
        >
          Sport shoes
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem
          onClick={handleOnClick("man", "shoes", "boots")}
        >
          Boots
        </DropdownMenuColumnItem>
      </DropdownMenuColumn>
    </DropdownMenuContainer>
  );

  return (
    <LeftMenu>
      <LeftMenuItem>
        <span onClick={handleOnClick("woman")}>WOMAN</span>
        <DropdownMenu>{MenuForWoman}</DropdownMenu>
      </LeftMenuItem>
      <LeftMenuItem>
        <span onClick={handleOnClick("man")}>MAN</span>
        <DropdownMenu>{MenuForMan}</DropdownMenu>
      </LeftMenuItem>
    </LeftMenu>
  );
};
