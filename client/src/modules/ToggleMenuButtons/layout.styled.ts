import styled from "styled-components";
import { width, height } from "../../helpers/mediaQueries";

export const ToggleMenuButtonsContainer = styled.div`
  display: none;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  font-weight: 300;
  font-size: 0.95em;

  :hover {
    cursor: pointer;
    color: black;
  }

  @media only screen and ${width[1000]} {
    display: flex;
  }

  @media screen and ${width[750]}, ${height[730]} {
    display: none;
  }
`;

type Prop = {
  prop: boolean;
};

export const ToggleMenuButton = styled.div<Prop>`
  color: ${({ prop }) => (prop ? "black" : "#00000070")};
  padding-bottom: 10px;
  border-bottom: ${({ prop }) => (prop ? "1px solid black" : "none")};
`;
