import React, { ChangeEvent, useMemo } from "react";
import { Product } from "../../store/getProducts/reducer";
import { ProductContainer } from "./components/ProductContainer/index";
import {
  SearchContainer,
  ContentContainer,
  InputContainer,
  SearchResultsContainer,
} from "./layout.styled";

type SearchMenuLayoutProps = {
  isOpen: boolean;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  searchByTermResult: Product[];
};

export const SearchMenuLayout = ({
  isOpen,
  handleOnChange,
  value,
  searchByTermResult,
}: SearchMenuLayoutProps) => {
  const searchResult = useMemo(
    () =>
      searchByTermResult.map((product) => (
        <ProductContainer
          key={product._id}
          _id={product._id}
          image={product.images[0].path}
          productName={product.productName}
          price={product.price}
        />
      )),
    [searchByTermResult]
  );

  return (
    <SearchContainer prop={isOpen}>
      <ContentContainer>
        <InputContainer>
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="Enter what are you searching for"
            onChange={handleOnChange}
            value={value}
          ></input>
        </InputContainer>
        <SearchResultsContainer>
          {value && searchByTermResult && searchResult}
        </SearchResultsContainer>
      </ContentContainer>
    </SearchContainer>
  );
};
