import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

type LoginContainerProps = {
  isOpen: boolean;
};

export const LoginContainer = styled.main<LoginContainerProps>`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 0px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: transparent;
  color: #000000;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 5;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: ${({ isOpen }) =>
    isOpen
      ? "transform .5s ease-in-out"
      : "transform .5s ease-in-out, opacity .01s ease-in .5s"};
  transform: translateX(-100%);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  font-family: "Ubuntu", sans-serif;

  @media only screen and ${width[1000]} {
    justify-content: center;
    align-items: center;
    transition: ${({ isOpen }) =>
      isOpen
        ? "opacity .5s ease-in-out, transform .01s ease-in"
        : "opacity .5s ease-in-out, transform .01s ease-in .4s"};
  }

  @media only screen and ${width[750]} {
    justify-content: center;
    align-items: center;
    transition: ${({ isOpen }) =>
      isOpen
        ? "transform .5s ease-in-out"
        : "transform .5s ease-in-out, opacity .01s ease-in .5s"};
  }
`;

export const CloseLoginMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;

  @media only screen and ${width[1000]} {
    background-color: #00000070;
  }
`;

export const LoginMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: start;
  -webkit-box-shadow: 3px 16px 20px 2px #000000;
  box-shadow: 3px 16px 20px 2px #000000;
  z-index: 2;

  @media only screen and ${width[1000]} {
    width: 750px;
    height: auto;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-bottom: 60px;
  }

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

export const CloseLoginMenuButton = styled.div`
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