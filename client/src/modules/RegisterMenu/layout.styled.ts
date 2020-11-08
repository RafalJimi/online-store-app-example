import styled from "styled-components";
import { width, height } from "../../helpers/mediaQueries";

type Prop = {
  prop: boolean;
};

export const RegisterContainer = styled.main<Prop>`
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
  opacity: ${({ prop }) => (prop ? "1" : "0")};
  transition: ${({ prop }) =>
    prop
      ? "opacity .5s ease-in-out, transform .01s ease-in"
      : "opacity .5s ease-in-out, transform .01s ease-in .4s"};
  transform: translateX(-100%);
  transform: ${({ prop }) => (prop ? "translateX(0%)" : "translateX(100%)")};
  font-family: "Ubuntu", sans-serif;

  @media only screen and ${width[750]}, ${height[730]} {
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
  background-color: #00000050;
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

  @media only screen and ${width[750]}, ${height[730]} {
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
    color: #00000050;
  }

  @media only screen and ${width[750]}, ${height[730]} {
    margin-top: 20px;
    margin-right: 0px;
  }
`;
