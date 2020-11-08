import React from "react";
import { CollectionMenu } from "./layout.styled";

type CollectionMenuLayoutProps = {
  isOpen: boolean;
  handleOnClick: (e: React.MouseEvent) => void;
};

export const CollectionMenuLayout = ({
  isOpen,
  handleOnClick,
}: CollectionMenuLayoutProps) => (
  <CollectionMenu prop={isOpen}>
    <span onClick={handleOnClick}>
      {isOpen ? (
        <i className="fas fa-angle-up" />
      ) : (
        <i className="fas fa-angle-down" />
      )}
      COLLECTION
    </span>

    <div>
      <li>Jackets</li>
      <li>Suits</li>
      <li>Coats</li>
      <li>Skirts</li>
      <li>Shoes</li>
    </div>
  </CollectionMenu>
);
