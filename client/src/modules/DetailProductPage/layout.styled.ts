import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const DetailPageContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 60px;
  display: flex;
  flex-direction: row;

  @media only screen and ${width[1300]} {
    padding-top: 120px;
  }
`;

export const ProductImagesContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 10px 0px 10px;
  justify-content: space-between;
  text-align: center;
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 40vw;
  margin-top: 20px;

  img {
    height: 100%;
  }
`;

export const ProductDetailsContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductNameContainer = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 100;
  margin: 20px 0px 30px 0px;
  font-size: 0.92em;
  font-family: "Ubuntu", sans-serif;
`;

export const ProductPriceContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.9em;
  margin-bottom: 40px;
`;

export const ProductSizesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;

  div {
    width: 40px;
    text-align: center;
    font-weight: 400;
    font-size: 0.9em;
    padding: 10px 0px;
  }

  div:hover {
    cursor: pointer;
    background-color: #00000010;
  }
`;

export const AddToCartButton = styled.button`
  width: 350px;
  height: 50px;
  text-align: center;
  background-color: #000000;
  border: none;
  outline: none;
  color: white;

  :hover {
    cursor: pointer;
    background-color: #00000080;
  }
`;
