import React from "react";
import { SearchPanelContainer } from "./layout.styled";

type SearchPanelLayoutProps = {
  handleOnClick: (
    gender: string,
    category: string,
    subCategory?: string
  ) => (e: React.MouseEvent) => void;
  searchContainerHeight: number
  gender: string;
};

export const SearchPanelLayout = ({
  handleOnClick,
  searchContainerHeight,
  gender
}: SearchPanelLayoutProps) => {
  
  const MenuForMan = (
    <React.Fragment>
      <ul>
        COLLECTION
        <li onClick={handleOnClick("man", "coats")}>Coats</li>
        <li onClick={handleOnClick("man", "jackets")}>Jackets</li>
        <li onClick={handleOnClick("man", "suits")}>Suits</li>
      </ul>
      <ul>
        Boots
        <li onClick={handleOnClick("man", "shoes")}>See it all</li>
        <li onClick={handleOnClick("man", "shoes", "sport shoes")}>
          Sport shoes
        </li>
        <li onClick={handleOnClick("man", "shoes", "boots")}>Boots</li>
      </ul>
    </React.Fragment>
  );
  
  const MenuForWoman = (
    <React.Fragment>
      <ul>
        COLLECTION
        <li onClick={handleOnClick("woman", "coats")}>Coats</li>
        <li onClick={handleOnClick("woman", "suits")}>Suits</li>
        <li onClick={handleOnClick("woman", "skirts")}>Skirts</li>
      </ul>
      <ul>
        Boots
        <li onClick={handleOnClick("woman", "shoes")}>See it all</li>
        <li onClick={handleOnClick("woman", "shoes", "sport shoes")}>
          Sport shoes
        </li>
        <li onClick={handleOnClick("woman", "shoes", "boots")}>Boots</li>
      </ul>
    </React.Fragment>
  );
  
  return (
    <SearchPanelContainer style={{ height: searchContainerHeight }}>
      {gender === "man" ? MenuForMan : MenuForWoman}
    </SearchPanelContainer>
  );
};
