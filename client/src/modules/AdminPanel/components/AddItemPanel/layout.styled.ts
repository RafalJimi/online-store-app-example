import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

type Prop = {
  prop: string;
};

export const AddItemPanelContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 0px;
`;

export const FileUploadContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const SelectInputsContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border: none;
  margin: 30px 0px;

  :focus {
    border: 1px solid #000000;
  }

  select {
    width: 30%;
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
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0px;

    select {
      width: 200px;
      margin: 5px 0px;
    }
  }
`;

export const TextInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0px;

  @media only screen and ${width[1000]} {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0px;
  }
`;

export const AddItemPanelInputContainer = styled.div<Prop>`
  display: flex;
  height: auto;
  width: 40%;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: 1px solid #00000050;
  flex-wrap: wrap;

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
    width: 50%;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
  }

  @media only screen and ${width[660]} {
    width: 60%;
  }

  @media only screen and ${width[500]} {
    width: 80%;
  }
`;

export const ItemDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;

  input {
    width: 500px;
    padding: 5px 5px;
    font-size: 1.1em;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
  }

  @media only screen and ${width[660]} {
    input {
      width: 80%;
                        }
  }
`;

export const AddItemPanelButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;

  button {
    width: 300px;
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
    margin: 20px 0px;
  }

  @media only screen and ${width[500]} {
    width: 100%;
    button {
      width: 80%;
    }
  }
`;