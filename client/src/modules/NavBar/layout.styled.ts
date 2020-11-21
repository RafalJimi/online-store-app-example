import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 60px;
  padding-left: 44px;
  padding-top: 12px;
  box-sizing: border-box;
  border-bottom: 1px solid #00000050;
  z-index: 5;

  @media only screen and ${width[1300]} {
    justify-content: flex-end;
  }
`;
