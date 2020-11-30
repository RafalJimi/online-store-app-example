import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const NavContainer = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  background-color: white;
  box-sizing: border-box;
  z-index: 5;

  @media only screen and ${width[1300]} {
    justify-content: flex-end;
    padding: 12px 5px;
  }
`;
