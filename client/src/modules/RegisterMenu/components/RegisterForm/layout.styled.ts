import styled from "styled-components";
import { width, maxHeight } from "../../../../helpers/mediaQueries";

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 500px;
  margin-left: 15px;

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const RegisterMenuTitle = styled.h2`
  font-size: 1em;
  display: flex;
  align-self: flex-end;
  font-weight: 500;
  align-self: center;
  margin-top: 0px;
  margin-bottom: 20px;
  padding-top: 0px;

  @media only screen and ${width[400]} {
    width: 100%;
    justify-content: center;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
  height: 20px;
`;

export const RadioInputContainer = styled.label`
  display: flex;
  width: 100px;
  height: 30px;
  justify-content: start;
  align-items: center;
  flex-direction: row;

  span {
    display: flex;
    padding-top: 4px;
    width: 300px;
    align-items: center;
    justify-content: center;
    height: 24px;
    margin-left: 0px;
    font-size: 0.9em;
  }

  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -99px;
  }
  [type="radio"]:checked + span,
  [type="radio"]:not(:checked) + span {
    position: relative;
    padding-left: 32px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: black;
  }
  [type="radio"]:checked + span:before,
  [type="radio"]:not(:checked) + span:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 100%;
    background: ${(props) => props.theme.colors.background};
  }
  [type="radio"]:checked + span:after,
  [type="radio"]:not(:checked) + span:after {
    content: "";
    width: 6px;
    height: 6px;
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + span:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + span:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const FullNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;

  @media only screen and ${width[750]} {
    flex-direction: column;
  }
`;

export const FullNameInputContainer = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;

  @media only screen and ${width[750]} {
    width: 100%;
  }
`;

type FirstNameInputProps = {
  prop: string;
};

export const FullNameInput = styled.input<FirstNameInputProps>`
  padding: 8px 0px;
  border: none;
  font-size: 1em;
  width: 100%;
  border-bottom: ${({ prop }) =>
    prop ? "1px solid #000000" : "1px solid #808080"};

  :focus {
    outline: none;
  }
`;

export const FullNameInputError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-bottom: 15px;
  padding-top: 5px;
  font-size: 0.6em;
  border: none;
  color: ${(props) => props.theme.colors.warning};
  margin: 0px 0px;
  height: 22px;

  p {
    position: absolute;
    padding-top: 5px;
    margin: 0px;
  }
`;

type LoginFormEmailInputContainerProps = {
  prop: string;
};

export const RegisterFormInputContainer = styled.div<
  LoginFormEmailInputContainerProps
>`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: 1px solid #808080;

  border-bottom: ${({ prop }) =>
    prop ? "1px solid #000000" : "1px solid #808080"};

  :focus {
    border: 1px solid #000000;
  }

  i {
    text-align: center;
    font-size: 1.1em;
  }
`;

export const RegisterFormInput = styled.input`
  padding: 8px 0px;
  border: none;
  font-size: 1em;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const RegisterFormInputIcon = styled.div`
  text-align: center;
  margin-right: 5px;
  width: 30px;
`;

export const RegisterFormInputErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-bottom: 15px;
  font-size: 0.6em;
  border: none;
  color: ${(props) => props.theme.colors.warning};
  margin: 0px 0px;
  height: 27px;

  p {
    position: absolute;
    padding-top: 5px;
    margin: 0px;
  }
`;

export const RegisterFormCheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &::before,
  &::after {
    box-sizing: border-box;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.primary};
    border: ${(props) => props.theme.borders.primary};
    border-radius: 4px;
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
      border-color: ${(props) => props.theme.colors.primary};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
    &:checked {
      color: ${(props) => props.theme.colors.primary};
      border-color: ${(props) => props.theme.colors.primary};
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
    position: relative;
    width: 100%;
    cursor: pointer;
    font-size: 0.7em;
    font-weight: 100;
    padding: 0 0.25em 0;
    user-select: none;
    line-height: 15px;
    padding-top: 16px;

    b:hover {
      color: #00000050;
    }
  }
`;

export const RegisterFormSubmitButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 15px 0px;
  border: none;
  background-color: #ceba97;
  color: ${(props) => props.theme.colors.background};
  font-size: 1em;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #ceba9799;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 15px 0px;
  border: none;
  background-color: #070708;
  color: ${(props) => props.theme.colors.background};
  font-size: 1em;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #07070899;
  }
`;
