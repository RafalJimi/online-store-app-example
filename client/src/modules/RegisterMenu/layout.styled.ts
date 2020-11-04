import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

type RegisterContainerProps = {
  isOpen: boolean;
};

export const RegisterContainer = styled.main<RegisterContainerProps>`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #000000;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 5;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: ${({ isOpen }) =>
    isOpen
      ? "opacity .5s ease-in-out, transform .01s ease-in"
      : "opacity .5s ease-in-out, transform .01s ease-in .4s"};
  }
  transform: translateX(-100%);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  font-family: "Ubuntu", sans-serif;

  @media only screen and ${width[750]} {
    justify-content: center;
    align-items: center;
    transition: ${({ isOpen }) =>
      isOpen
        ? "transform .5s ease-in-out"
        : "transform .5s ease-in-out, opacity .01s ease-in .5s"};
  }
`;

export const CloseRegisterMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000050;

  @media only screen and ${width[1000]} {
    background-color: #00000070;
  }
`;

export const RegisterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: auto;
  background-color: white;
  align-items: center;
  justify-content: start;
  -webkit-box-shadow: none;
  box-shadow: none;
  z-index: 2;
  padding-bottom: 60px;

  @media only screen and ${width[750]} {
    width: 100%;
    height: 100%;
    padding: 0px 30px;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    height: 100%;
    padding: 0px 30px;
  }
`;

export const CloseRegisterMenuButton = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-top: 5px;
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  font-weight: 100;

  :hover {
    cursor: pointer;
    color: #00000050;
  }
`;
