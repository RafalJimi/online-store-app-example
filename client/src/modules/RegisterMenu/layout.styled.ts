import styled from "styled-components";
import { width, maxHeight } from "../../helpers/mediaQueries";

type Prop = {
  prop: boolean;
};

export const RegisterContainer = styled.div<Prop>`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 12;
  opacity: ${({ prop }) => (prop ? "1" : "0")};
  transition: ${({ prop }) =>
    prop
      ? "opacity .5s ease-in-out, transform .01s ease-in"
      : "opacity .5s ease-in-out, transform .01s ease-in .4s"};
  transform: translateX(-100%);
  transform: ${({ prop }) => (prop ? "translateX(0%)" : "translateX(100%)")};
  font-family: ${(props) => props.theme.fonts.secondary};

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    transition: none;
    transform: ${({ prop }) => (prop ? "translateX(0%)" : "translateX(100%)")};
  }
`;

export const CloseRegisterMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.modalBackground};
`;

export const RegisterMenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: auto;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: start;
  -webkit-box-shadow: none;
  box-shadow: none;
  z-index: 2;
  padding-bottom: 60px;

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    width: 100%;
    height: 100%;
    padding: 0px 30px;
    overflow-y: scroll;
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
    color: ${(props) => props.theme.colors.secondary};
  }

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    margin-top: 20px;
    margin-right: 0px;
    transform: translate(20px, 0px);
  }
`;
