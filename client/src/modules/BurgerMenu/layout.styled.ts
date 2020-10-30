import styled from "styled-components";

type BurgerMenuProps = {
  isOpen: boolean;
};

export const BurgerMenuContainer = styled.nav<BurgerMenuProps>`
  display: flex;
  position: fixed;
  margin-top: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #000000;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  }
`;
