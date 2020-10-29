import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 12px;

  @media only screen and (max-width: 1300px) {
    justify-content: flex-end;
  }
`;
