import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const NewsletterContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 40px 0px 30px 0px;

  @media only screen and ${width[500]} {
    width: 260px;
  }
`;

export const NewsletterTitle = styled.div`
  font-weight: 450;
  font-size: 1em;

  :hover {
    cursor: pointer;
  }
`;

type Prop = {
  prop: boolean;
};

export const NewletterForm = styled.form<Prop>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: ${({ prop }) => (prop ? "auto" : "37px")};
`;

export const NewletterInput = styled.input`
  padding: 10px 0px;
  border: none;
  font-size: 0.9em;
  width: 100%;
  border-bottom: 1px solid #00000050;

  :focus {
    outline: none;
    border-bottom: 1px solid #000000;
  }
`;

export const NewsletterInfo = styled.div`
  margin-top: 30px;
  font-size: 0.8em;
  font-weight: 100;
`;

export const NewsletterFormCheckboxContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &::before,
  &::after {
    box-sizing: border-box;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 24px;
    color: black;
    border: 0.1px solid black;
    border-radius: 0px;
    margin-right: 10px;
    appearance: none;
    outline: 0;
    cursor: pointer;
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 0%;
      left: 5px;
      width: 8px;
      height: 14px;
      border-style: solid;
      border-color: black;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
    &:checked {
      color: black;
      border-color: black;
      background: white;
      &::before {
        opacity: 1;
      }
      ~ label::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  }

  span {
    display: flex;
    position: relative;
    height: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.95em;
    font-weight: 400;
    user-select: none;
    line-height: 15px;

    b:hover {
      color: #00000050;
    }
  }
`;

export const NewsletterFormSubmitButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 15px 0px;
  border: none;
  background-color: black;
  color: white;
  font-size: 1em;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #00000050;
  }
`;

export const NewsletterFormRulesContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  &::before,
  &::after {
    box-sizing: border-box;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
  }

  input[type="checkbox"] {
    display: flex;
    align-self: flex-start;
    position: relative;
    width: 24px;
    height: 24px;
    color: black;
    border: 0.1px solid black;
    border-radius: 0px;
    margin-right: 10px;
    appearance: none;
    outline: 0;
    cursor: pointer;
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 0%;
      left: 5px;
      width: 8px;
      height: 14px;
      border-style: solid;
      border-color: black;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
    &:checked {
      color: black;
      border-color: black;
      background: white;
      &::before {
        opacity: 1;
      }
      ~ label::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  }

  span {
    display: flex;
    position: relative;
    height: 100%;
    width: calc(100% - 24px);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.7em;
    font-weight: 100;
    user-select: none;
    line-height: 15px;
  }
`;
