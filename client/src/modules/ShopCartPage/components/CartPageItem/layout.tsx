import React, { ChangeEvent } from "react";
import { options } from "./consts";
import {
  CartPageItemContainer,
  ItemDetailsContainer,
  PriceContainer,
  ImageContainer,
  Details,
} from "./layout.styled";

type CartPageItemLayoutProps = {
  imageUrl: string;
  name: string;
  size: string;
  sumPrice: number;
  handleOnSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnClick: (e: React.MouseEvent) => void;
};

export const CartPageItemLayout = ({
  imageUrl,
  name,
  size,
  sumPrice,
  handleOnSelect,
  handleOnClick,
}: CartPageItemLayoutProps) => (
  <CartPageItemContainer>
    <ItemDetailsContainer>
      <ImageContainer>
        <img src={`${process.env.REACT_APP_SERVER_URL}${imageUrl}`} alt="" />
      </ImageContainer>
      <Details>
        <p>{name}</p>
        <span className="ItemPrice">{sumPrice.toFixed(2)} PLN</span>
        <span>Size {size}</span>
        <div>
          Quantity{" "}
          <select onChange={handleOnSelect}>
            {options.map((option) => (
              <option value={option.value} key={option.key}>
                {option.value}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleOnClick}>Delete</button>
      </Details>
    </ItemDetailsContainer>
    <PriceContainer>{sumPrice.toFixed(2)} PLN</PriceContainer>
  </CartPageItemContainer>
);
