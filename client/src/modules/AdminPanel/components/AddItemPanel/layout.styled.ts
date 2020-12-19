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
    border: ${(props) => props.theme.borders.primary};
    border-radius: 3px;
    font-size: 1.1em;
  }

  select > option {
    padding: 10px 20px;
    color: ${(props) => props.theme.colors.primary};
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
  border-bottom: ${(props) => props.theme.borders.secondary};
  flex-wrap: wrap;

  border-bottom: ${({ prop }) =>
    prop ? "1px solid #000000" : "1px solid #00000050"};

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  flex-wrap: wrap;

  ul {
    justify-content: center;
    align-items: center;
    width: 70%;
    text-align: center;
    font-size: 1.1em;
  }

  ul > li {
    text-align: start;
    font-weight: 100;
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.9em;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  ul > li > button {
    padding: 0px 10px;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    color: ${(props) => props.theme.colors.background};
    font-size: 1.2em;
    border-radius: 10px;
    text-align: center;
    margin-left: 20px;
  }

  @media only screen and ${width[660]} {
    ul > li {
      padding: 5px 0px;
      word-wrap: wrap;
    }
  }

  ul > li > button {
    font-size: 0.8em;
  }
`;

export const AddProductDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
  flex-wrap: wrap;

  input {
    width: 500px;
    padding: 5px 5px;
    font-size: 1.1em;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
  }

  button {
    height: 40px;
    padding: 0px 20px;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    color: ${(props) => props.theme.colors.background};
    font-size: 1.2em;
    border-radius: 10px;
  }

  @media only screen and ${width[660]} {
    input {
      width: 60%;
    }

    button {
      width: 30%;
      font-size: 0.8em;
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