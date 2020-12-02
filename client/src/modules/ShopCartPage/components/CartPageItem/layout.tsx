import React from "react";
import Test from "../../../../assets/ActivatePage/ActivationPagePhoto.jpg";
import { options } from "./consts";
import {
  CartPageItemContainer,
  ItemDetailsContainer,
  PriceContainer,
  ImageContainer,
  Details,
} from "./layout.styled";

export const CartPageItemLayout = () => (
  <CartPageItemContainer>
    <ItemDetailsContainer>
      <ImageContainer>
        <img src={Test} alt="" />
      </ImageContainer>
      <Details>
        <p>Flannel joggers in a slim cut</p>
        <span className="ItemPrice">199,00 PLN</span>
        <span>Size 38</span>
        <div>
          Quantity{" "}
          <select>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>

        <button>Delete</button>
      </Details>
    </ItemDetailsContainer>
    <PriceContainer>199,00 PLN</PriceContainer>
  </CartPageItemContainer>
);
