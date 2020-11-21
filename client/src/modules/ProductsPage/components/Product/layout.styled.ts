import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const ProductContainer = styled.div`
  width: calc(100%);
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  :hover > div > .addToCart {
    display: flex;
    opacity: 100%;
  }

  @media only screen and ${width[1000]} {
    :hover > div > .addToCart {
      display: none;
    }
  }
`;

export const ProductImgContainer = styled.div`
  width: 100%;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f570;
  padding: 120px 20px 20px 20px;
  box-sizing: border-box;

  img {
    height: 75vw;
    margin-bottom: 50px;
  }

  @media only screen and ${width[1000]} {
    img {
      height: 85vw;
      margin-bottom: 50px;
    }
  }

  @media only screen and ${width[660]} {
    img {
      height: 100vw;
      margin-bottom: 50px;
    }
  }
`;

export const AddItemToCartContainer = styled.div`
  width: 100%;
  padding-top: 0px;
  background-color: white;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  padding: 10px 0px;
  opacity: 0%;
  transition: opacity 0.5s;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
  }

  div > div {
    margin: 0px 10px;
    width: 30px;
    height: 20px;
    text-align: center;
    font-size: 0.9em;
    font-weight: 100;
  }

  div > div:hover {
    margin: 0px 10px;
    background-color: #f5f5f570;
    cursor: pointer;
  }
`;

export const ProductDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 10px 0px 40px 0px;
  height: auto;

  span {
    font-weight: 100;
    font-family: "Ubuntu", sans-serif;
    font-size: 0.9em;
    margin-bottom: 20px;
    word-spacing: 1px;
    transition: opacity 0.3s;
  }

  span: hover {
    cursor: pointer;
    opacity: 70%;
  }

  div {
    margin: 0px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    word-spacing: 2px;
    padding: 0px;
    font-size: 1.2em;
  }

  @media only screen and ${width[1000]} {
    align-items: flex-start;
    padding-left: 20px;
  }
`;
