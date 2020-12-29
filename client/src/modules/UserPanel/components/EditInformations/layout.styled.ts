import styled from "styled-components";
import { width, maxHeight } from "../../../../helpers/mediaQueries";

export const InformationsFormContainer = styled.form`
  width: 100%;
  min-height: calc(100vh - 465px);
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 0px;

  @media only screen and ${maxHeight[900]} and (min-width: 1000px) {
    height: auto;
  }

  @media only screen and ${width[1000]} {
    height: auto;
  }
`;

type Prop = {
  prop: string;
};

export const FormInputContainer = styled.div<Prop>`
  display: flex;
  height: auto;
  width: 30%;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: ${(props) => props.theme.borders.secondary};
  flex-wrap: wrap;
  margin: 20px 0px;

  border-bottom: ${({ prop }) =>
    prop ? "1px solid #000000" : "1px solid #778899"};

  :focus {
    border: ${(props) => props.theme.borders.primary};
  }

  input {
    padding: 8px 0px;
    border: none;
    font-size: 1em;
    width: 100%;

    :focus {
      outline: none;
    }
  }

  @media only screen and ${width[1000]} {
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
  }

  @media only screen and ${width[660]} {
    width: 80%;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;

  button {
    width: 30%;
    height: 40px;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    color: ${(props) => props.theme.colors.background};
    font-size: 1.2em;
    border-radius: 10px;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  button:focus {
    outline: none;
  }

  @media only screen and ${width[1000]} {
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;

    button {
      width: 60%;
      margin: 10px 0px;
    }
  }

  @media only screen and ${width[660]} {
    width: 100%;

    button {
      width: 80%;
    }
  }
`;
