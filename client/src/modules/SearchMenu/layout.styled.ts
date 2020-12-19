import styled from "styled-components";
import { width, maxHeight } from "../../helpers/mediaQueries";

type Prop = {
  prop: boolean;
};

export const SearchContainer = styled.div<Prop>`
  display: flex;
  position: fixed;
  top: 50px;
  margin-top: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
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
  font-family: ${(props) => props.theme.fonts.secondary};

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    transition: none;
    transform: ${({ prop }) => (prop ? "translateX(0%)" : "translateX(100%)")};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 800px;
  max-width: 1000px;
  width: 1000px;
  margin-top: 50px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: ${(props) => props.theme.borders.primary};
  align-items: center;
  padding: 10px 5px;

  i {
    font-size: 1.1em;
    margin-right: 10px;
  }

  input {
    border: none;
    font-size: 1.5em;
    color: ${(props) => props.theme.colors.primary};
    width: calc(100% - 40px);
  }

  input:focus {
    border: none;
    outline: none;
  }

  @media only screen and ${width[400]} {
    input {
      font-size: 1.2em;
    }
  }
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 40px 0px;
  flex-wrap: wrap;
  justify-content: space-around;
`;
