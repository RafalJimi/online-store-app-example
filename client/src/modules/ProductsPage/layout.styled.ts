import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const ProductsPageContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px 300px;

  @media only screen and ${width[1000]} {
    padding-left: 0px;
  }
`;

export const ProductsContainer = styled.div`
  width: calc(100% - 300px);
  min-height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};

  @media only screen and ${width[1000]} {
    width: 100%;
  }
`;
