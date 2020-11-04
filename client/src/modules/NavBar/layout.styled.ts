import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 12px;
  border-bottom: 1px solid #00000050;

  @media only screen and ${width[1300]} {
    justify-content: flex-end;
  }
`;
