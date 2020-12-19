import styled from "styled-components";
import { width, maxHeight } from "../../../../helpers/mediaQueries";

export const OrderFormContainer = styled.form`
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

export const OrderFormInputContainer = styled.div<Prop>`
  display: flex;
  height: auto;
  width: 30%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: none;
  flex-wrap: wrap;
  margin: 20px 0px;

  input {
    padding: 8px 0px;
    border: none;
    font-size: 1em;
    width: 100%;

    border-bottom: ${({ prop }) =>
      prop ? "1px solid #000000" : "1px solid #808080"};

    :focus {
      outline: none;
    }
  }

  div {
    font-size: 0.7em;
    height: 20px;
    margin-top: 5px;
    width: 100%;
    font-weight: 100;
    color: ${(props) => props.theme.colors.warning};
    display: flex;
    align-items: center;
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

export const OrderFormButtonsContainer = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;

  @media only screen and ${width[1000]} {
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
  }

  @media only screen and ${width[660]} {
    width: 100%;
  }
`;
