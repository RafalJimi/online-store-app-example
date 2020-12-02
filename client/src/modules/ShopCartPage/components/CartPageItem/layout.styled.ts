import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const CartPageItemContainer = styled.div`
  margin-top: 40px;
  height: 252px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Ubuntu", sans-serif;
  border-bottom: 1px solid #00000050;
  padding-bottom: 20px;

  @media only screen and ${width[1000]} {
    height: 220px;
  }
`;

export const ItemDetailsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 0px;
`;

export const ImageContainer = styled.div`
  margin-top: 0px;
  height: 232px;
  text-align: center;
  margin-right: 15px;

  img {
    width: 174px;
  }

  @media only screen and ${width[1000]} {
    height: 150px;

    img {
      width: 113px;
    }
  }
`;

export const Details = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 30px;

  p {
    font-weight: 500;
    align-text: start;
  }

  span {
    font-size: 0.9em;
    font-weight: 500;
  }

  div {
    font-size: 0.8em;
    font-weight: 100;
    border: 1px solid #00000050;
    padding: 5px 20px;
    text-align: center;
  }

  div > select {
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
    width: 40px;
    font-weight: 500;
    padding: 5px 0px;
  }

  div > select:hover {
    cursor: pointer;
  }

  button {
    border: none;
    outline: none;
    background-color: white;
    border-bottom: 1px solid black;
    font-weight: 500;
    font-size: 1em;
    padding: 5px 0px;
  }

  button:hover {
    cursor: pointer;
  }

  .ItemPrice {
    display: none;
  }

  @media only screen and ${width[500]} {
    .ItemPrice {
      display: block;
      font-size: 1em;
    }
  }
`;

export const PriceContainer = styled.div`
  height: 100px;
  height: 20px;
  text-align: end;
  font-weight: 500;

  @media only screen and ${width[500]} {
    display: none;
  }
`;
