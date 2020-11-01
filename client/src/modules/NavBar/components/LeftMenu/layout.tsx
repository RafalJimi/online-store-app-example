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

export const LeftMenuLayout = () => {
  const MenuForWoman = (
    <DropdownMenuContainer>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>NEW PRODUCTS</DropdownMenuColumnTitle>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>COLLECTION</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>
          Down coats and jackets
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Jackets</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Suits</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>T-shirts</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Skirts</DropdownMenuColumnItem>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>SHOES AND BAGS</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>See it all</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Shoes</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Handbags</DropdownMenuColumnItem>
      </DropdownMenuColumn>
    </DropdownMenuContainer>
  );

  const MenuForMan = (
    <DropdownMenuContainer>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>NEW PRODUCTS</DropdownMenuColumnTitle>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>COLLECTION</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>Coats</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Jackets</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Jackets</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Cardigans</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Shirts</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Trousers</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Suits</DropdownMenuColumnItem>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>Shoes</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>See it all</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Sport shoes</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Casual shoes</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Elegant shoes</DropdownMenuColumnItem>
      </DropdownMenuColumn>
    </DropdownMenuContainer>
  );

  return (
    <LeftMenu>
      <LeftMenuItem>
        <span>WOMAN</span>
        <DropdownMenu>{MenuForWoman}</DropdownMenu>
      </LeftMenuItem>
      <LeftMenuItem>
        <span>MAN</span>
        <DropdownMenu>{MenuForMan}</DropdownMenu>
      </LeftMenuItem>
    </LeftMenu>
  );
};
