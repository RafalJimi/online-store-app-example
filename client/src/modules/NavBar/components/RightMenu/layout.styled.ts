import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const RightMenuContainer = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  z-index: 10;

  @media only screen and ${width[1300]} {
    font-size: 0.7em;
    margin-top: 10px;
    margin-left: 10px;
    width: 200px;
    margin-right: 20px;
  }

  @media only screen and ${width[500]} {
    width: 160px;
    margin-right: 10px;
  }
`;

type RightMenuItemProps = {
  showIcon: boolean;
};

export const RightMenuItem = styled.div<RightMenuItemProps>`
  font-size: 0.85em;
  font-weight: 400;
  text-align: center;
  color: black;
  word-spacing: 2px;
  flex: 1 1 auto;
  padding: 20px 10px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  i {
    display: ${({ showIcon }) => (showIcon ? "inline-block" : "none")};
  }

  .number {
    position: absolute;
    background-color: red;
    height: 20px;
    width: 20px;
    transform: translate(35px, 10px);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.background};
    font-size: 0.9em;
  }

  @media only screen and ${width[1300]} {
    font-size: 1.5em;
    width: 30px;

    flex: 0 0 auto;

    i {
      display: block;
    }

    span {
      display: none;
    }

    .number {
      transform: translate(10px, 10px);
    }
  }

  @media only screen and ${width[500]} {
    width: 20px;
  }
`;

type MenuIsOpen = {
  isOpen: boolean;
}

export const DropdownMenu =
  styled.div<
  MenuIsOpen>`
  position: absolute;
  display: ${({isOpen}) => isOpen ? "flex" : "none"};
  flex-direction: column;
  width: 200px;
  top: 50px;
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.borders.primary};
`;

export const DropdownMenuItem = styled.div`
  width: 100%;
  font-size: 0.9em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
  color: ${(props) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const BurgerButtonContainer = styled.div`
  font-size: 0.85em;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  word-spacing: 2px;
  flex: 1 1 auto;
  padding-top: 2px;
  margin-bottom: 2px;
  display: none;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  @media only screen and ${width[1300]} {
    font-size: 1.5em;
    width: 30px;
    flex: 0 0 auto;
    display: block;
  }
`;

type BurgerButtonProps = {
  isOpen: boolean;
};

export const BurgerButton = styled.button<BurgerButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  overflow: hidden;
  height: 18px;
  background: ${(props) => props.theme.colors.background};
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  padding-bottom: 0px;
  &:focus {
    outline: none;
  }

  @media only screen and ${width[1300]} {
      button {
        display: none;
      }
      div {
        width: 20px;
        height: 2px;
        background: black;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        :first-child {
          transform: ${({ isOpen }) => (isOpen ? "rotate(43deg)" : "rotate(0)")};
        }
        :nth-child(2) {
          opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
        }
        :nth-child(3) {
          transform: ${({ isOpen }) => (isOpen ? "rotate(-43deg)" : "rotate(0)")};
        }
      }
  }
`;
