import styled from "styled-components";
import { width, maxHeight } from "../../helpers/mediaQueries";

type Prop = {
  prop: boolean;
};

export const LoginMenuWrapped = styled.div<Prop>`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 0px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 12;
  opacity: ${({ prop }) => (prop ? "1" : "0")};
  transition: ${({ prop }) =>
    prop
      ? "transform .5s ease-in-out"
      : "transform .5s ease-in-out, opacity .01s ease-in .5s"};
  transform: translateX(-100%);
  transform: ${({ prop }) => (prop ? "translateX(0%)" : "translateX(100%)")};
  font-family: "Ubuntu", sans-serif;

  @media only screen and ${width[1000]} {
    justify-content: center;
    align-items: center;
    transition: ${({ prop }) =>
      prop
        ? "opacity .5s ease-in-out, transform .01s ease-in"
        : "opacity .5s ease-in-out, transform .01s ease-in .5s"};
  }

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    transition: none;
    transform: ${({ prop }) => (prop ? "translateX(0%)" : "translateX(100%)")};
  }
`;

export const CloseLoginMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate(0px, 20px);
  background-color: transparent;

  @media only screen and ${width[1000]} {
    background-color: #${(props) => props.theme.colors.secondBackground};
  }
`;

export const LoginMenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
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
    overflow-y: scroll;
  }

  @media screen and ${width[750]}, ${maxHeight[750]} {
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
    color: ${(props) => props.theme.colors.secondary};
  }

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    margin-top: 20px;
    margin-right: 0px;
    transform: translate(20px, 0px);
  }
`;