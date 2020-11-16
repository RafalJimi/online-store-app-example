import styled from "styled-components";
import { width, maxHeight } from "../../../../helpers/mediaQueries";

export const EditUserPanelContainer = styled.form`
  width: 100%;
  height: calc(100vh - 578px);
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

export const EditUserPanelInputContainer = styled.div<Prop>`
  display: flex;
  height: auto;
  width: 30%;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: 1px solid #00000050;
  flex-wrap: wrap;
  margin: 20px 0px;

  border-bottom: ${({ prop }) =>
    prop ? "1px solid #000000" : "1px solid #00000050"};

  :focus {
    border: 1px solid #000000;
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

export const EditUserPanelSelectContainer = styled.div`
  display: flex;
  height: auto;
  width: 30%;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 20px 0px;

  :focus {
    border: 1px solid #000000;
  }

  select {
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 1.1em;
  }

  select > option {
    padding: 10px 20px;
    color: black;
  }

  @media only screen and ${width[1000]} {
    width: 50%;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;

    select {
      width: 60%;
      margin: 5px 0px;
    }
  }

  @media only screen and ${width[660]} {
    width: 100%;

    select {
      width: 50%;
    }
  }
`;

export const EditUserPanelButtonsContainer = styled.div`
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
    background-color: black;
    border: none;
    color: white;
    font-size: 1.2em;
    border-radius: 10px;
  }

  button: hover {
    background-color: #00000050;
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
