import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const ProductPageLayoutContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  padding-left: 300px;

  @media only screen and ${width[1000]} {
    padding-left: 0px;
  }
`;

export const SearchPropsContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  width: 300px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 30px;
  font-size: 1.2em;

  ul {
    margin-top: 10px;
  }

  ul > li {
    list-style-type: none;
    padding-left: 10px;
    font-size: 0.8em;
    margin: 15px 0px;
  }

  ul > li:hover {
    cursor: pointer;
    color: #00000070;
  }
`;

export const ProductsContainer = styled.div`
  width: calc(100% - 300px);
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  @media only screen and ${width[1000]} {
    width: 100%;
  }
`;
