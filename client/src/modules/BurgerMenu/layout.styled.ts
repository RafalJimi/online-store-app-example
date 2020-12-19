import styled from "styled-components";

type BurgerMenuProps = {
  isOpen: boolean;
};

export const BurgerMenuContainer = styled.nav<BurgerMenuProps>`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondBackground};
  left: 0;
  top: 50px;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
`;

export const Menu = styled.menu`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const MenuElement = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => props.theme.borders.secondary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 15px 0px;
  background-color: ${(props) => props.theme.colors.background};

  :hover {
    border-bottom: ${(props) => props.theme.borders.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const RegisterOrLoginReference = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: none;
  color: ${(props) => props.theme.colors.primary};
  padding: 15px 50px;
  font-size: 0.85em;
  background-color: ${(props) => props.theme.colors.background};
`;

export const CollectionMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  padding: 20px 50px;
  font-size: 1em;
  margin-top: 10px;
  margin: 0px;
  transition: height 1s;

  span > i {
    margin-right: 10px;
  }

  div {
    display: column;
    flex-direction: column;
    margin-left: 30px;
    list-style-type: none;
    margin-top: 10px;
    height: 0px;
    transition: height 1s;
    overflow: hidden;
  }

  div > li {
    padding: 10px 0px;
    font-weight: 100;
  }

  :hover div {
    height: 200px;
    transition: height 1s;
  }
`;

export const Contact = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  padding: 5px 50px;
  font-size: 1em;
  margin-top: 10px;
  margin: 0px;
  font-weight: 100;
`;