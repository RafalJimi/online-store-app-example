import { NONAME } from "dns";
import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const RightMenuContainer = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 400px;

  @media only screen and ${width[1300]} {
    font-size: 0.7em;
    margin-top: 10px;
    margin-left: 10px;
    width: 250px;
    margin-right: 20px;
  }

  @media only screen and ${width[500]} {
    width: 160px;
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
    color: #00000050;
    cursor: pointer;
  }

  i {
    display: ${({ showIcon }) => ((showIcon ? "inline-block" : "none"))};
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
  }

  @media only screen and ${width[500]} {
    width: 20px;
  }
`;

export const BurgerButtonContainer = styled.div`
  font-size: 0.85em;
  font-weight: 400;
  text-align: center;
  color: black;
  word-spacing: 2px;
  flex: 1 1 auto;
  padding-top: 2px;
  margin-bottom: 2px;
  display: none;

  :hover {
    color: #00000050;
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
  background: white;
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
`;
