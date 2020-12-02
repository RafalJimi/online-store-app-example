import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const ShopCartPageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and ${width[1300]} {
    margin-top: 80px;
    min-height: calc(100vh - 100px);
  }

  @media only screen and ${width[1000]} {
    flex-direction: column;
  }
`;

export const ProductsListContainer = styled.div`
  box-sizing: border-box;
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 10px 0px 10px;
  justify-content: flex-start;
  text-align: center;
  margin-right: 50px;
  flex-direction: column;

  @media only screen and ${width[1300]} {
    width: 550px;
  }

  @media only screen and ${width[1000]} {
    width: 100%;
    padding: 0px 6vw;
  }
`;

export const ProductsListHeader = styled.header`
  width: 100%;
  height: 20px;
  margin-top: 40px;
  padding: 25px 0px;
  border-bottom: 1px solid #00000050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;

export const OrderSummaryContainer = styled.div`
  box-sizing: border-box;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and ${width[1300]} {
    width: 250px;
  }

  @media only screen and ${width[1000]} {
    margin-top: 20px;
    width: 100%;
    padding: 0px 6vw;
    margin-bottom: 30px;
  }
`;

export const OrderSummaryHeader = styled.header`
  width: 100%;
  height: 20px;
  margin-top: 40px;
  padding: 25px 0px;
  border-bottom: 1px solid #00000050;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const OrderSummaryContainerElement = styled.div`
  width: 100%;
  display: flex;
  font-weight: 100;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.9em;
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 10px;
`;

export const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  font-weight: 400;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.9em;
  font-family: "Ubuntu", sans-serif;
  margin-top: 50px;

  span {
    display: flex;
  }

  span > p {
    font-size: 0.7em;
    padding-top: 4px;
    padding-left: 5px;
  }
`;

export const OrderButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  border: none;
  margin-top: 20px;
  font-size: 0.95em;

  :hover {
    background-color: #00000099;
    cursor: pointer;
  }
`;
