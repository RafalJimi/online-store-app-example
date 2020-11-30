import styled from "styled-components";
import { width, maxHeight } from "../../../../helpers/mediaQueries";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 15px;

  @media only screen and ${width[1000]} {
    margin-top: 20px;
    width: 500px;
  }

  @media only screen and ${width[750]}, ${maxHeight[750]} {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const LoginContainerTitle = styled.h2`
  font-size: 1em;
  display: flex;
  justify-content: center;
  font-weight: 500;
  padding-top: 20px;
  text-align: center;
  align-self: center;
  margin-bottom: 15px;

  @media only screen and ${width[1000]} {
    padding-top: 0px;
    margin-top: 0px;
  }

  @media only screen and ${width[400]} {
    width: 100%%;
  }
`;

export const LoginContainerSubTitle = styled.h4`
  display: flex;
  justify-content: center;
  font-weight: 100;
  font-size: 0.9em;
  margin-bottom: 15px;

  @media only screen and ${width[400]} {
    width: 100%;
    text-align: center;
  }
`;

type LoginFormInputContainerProps = {
  prop: string;
};

export const LoginFormInputContainer = styled.div<LoginFormInputContainerProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: 1px solid #00000050;

  border-bottom: ${({ prop }) =>
    prop ? "1px solid #000000" : "1px solid #00000050"};

  :focus {
    border: 1px solid #000000;
  }

  i {
    text-align: center;
    font-size: 1.1em;
  }
`;

export const LoginFormInput = styled.input`
  padding: 8px 0px;
  border: none;
  font-size: 1em;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const LoginFormInputIcon = styled.div`
  text-align: center;
`;

export const LoginFormInputErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-bottom: 15px;
  padding-top: 5px;
  font-size: 0.6em;
  border: none;
  color: red;
  margin: 0px 0px;
  height: 27px;

  p {
    position: absolute;
    padding-top: 5px;
    margin: 0px;
  }
`;

export const ForgotPasswordButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: black;
  font-weight: 500;
  width: 100%;

  p {
    text-decoration: underline;
  }

  p:hover {
    color: #00000050;
    cursor: pointer;
  }

  @media only screen and ${width[1000]} {
    font-size: 0.9em;
  }
`;

export const LoginFormSubmitButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 15px 0px;
  border: none;
  background-color: #ceba97;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
    background-color: #ceba9799;
  }

  @media only screen and ${width[1000]} {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const CreateAccountTitle = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 0px;
  padding: 15px 0px;
  color: black;
  font-size: 1em;

  @media only screen and ${width[1000]} {
    margin-top: 0px;
    display: none;
  }
`;

export const CreateAccountButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 15px 0px;
  border: none;
  background-color: #070708;
  color: white;
  font-size: 1em;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #07070899;
  }

  @media only screen and ${width[1000]} {
    display: none;
  }
`;

export const CreateAccountLowResolution = styled.div`
  margin-top: 30px;
  display: none;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  span {
    margin-left: 10px;
    text-decoration: underline;
  }

  span:hover {
    cursor: pointer;
    color: #00000050;
  }

  @media only screen and ${width[1000]} {
    display: flex;
  }
`;
