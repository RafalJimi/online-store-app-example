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
        <DropdownMenuColumnTitle>NOWOŚCI</DropdownMenuColumnTitle>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>KOLEKCJA</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>
          Płaszcze i kurtki puchowe
        </DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Marynarki</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Garnitury</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Koszulki</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Spódnice</DropdownMenuColumnItem>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>BUTY I TOREBKI</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>Buty</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Torebki</DropdownMenuColumnItem>
      </DropdownMenuColumn>
    </DropdownMenuContainer>
  );

  const MenuForMan = (
    <DropdownMenuContainer>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>NOWOŚCI</DropdownMenuColumnTitle>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>KOLEKCJA</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>Płaszcze</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Kurtki</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Marynarki</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Kardigany</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Koszule</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Spodnie</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Garnitury</DropdownMenuColumnItem>
      </DropdownMenuColumn>
      <DropdownMenuColumn>
        <DropdownMenuColumnTitle>BUTY</DropdownMenuColumnTitle>
        <DropdownMenuColumnItem>Zobacz wszystko</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Buty sportowe</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Buty casual</DropdownMenuColumnItem>
        <DropdownMenuColumnItem>Buty eleganckie</DropdownMenuColumnItem>
      </DropdownMenuColumn>
    </DropdownMenuContainer>
  );

  return (
    <LeftMenu>
      <LeftMenuItem>
        <span>KOBIETA</span>
        <DropdownMenu>{MenuForWoman}</DropdownMenu>
      </LeftMenuItem>
      <LeftMenuItem>
        <span>MĘŻCZYZNA</span>
        <DropdownMenu>{MenuForMan}</DropdownMenu>
      </LeftMenuItem>
    </LeftMenu>
  );
};
