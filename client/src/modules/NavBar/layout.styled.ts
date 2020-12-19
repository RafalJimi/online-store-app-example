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
  z-index: 5;
  background-color: ${(props) => props.theme.colors.background};

  @media only screen and ${width[1300]} {
    justify-content: flex-end;
    padding: 12px 5px;
  }
`;
