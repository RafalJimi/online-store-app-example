import styled from "styled-components";
import { width, height } from "../../helpers/mediaQueries";

export const ForgetPasswordLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px 0px 30px;
  overflow-y: hidden;
  height: calc(100vh - 362px);

  @media only screen and ${width[1300]} {
    height: calc(100vh - 275px);
  }

  @media only screen and ${width[1000]} {
    justify-content: flex-start;
  }

  @media only screen and ${height[600]} {
    justify-content: flex-start;
    min-height: 300px;
  }
`;

export const ForgetPasswordContent = styled.main`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

export const ForgetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  padding: 20px 30px;
`;

type ForgetPasswordInputContainerProps = {
  prop: string;
};

export const ForgetPasswordInputContainer = styled.div<
  ForgetPasswordInputContainerProps
>`
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

  @media only screen and ${width[1000]} {
    width: 250px;
  }
`;

export const ForgetPasswordInput = styled.input`
  padding: 8px 0px;
  border: none;
  font-size: 1em;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const ForgetPasswordInputErrorMessage = styled.div`
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
  width: 100%;

  p {
    position: absolute;
    padding-top: 5px;
    margin: 0px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  height: 500px;

  img {
    height: 100%;
  }

  @media only screen and ${width[1300]} {
    height: 350px;
  }

  @media only screen and ${width[1000]} {
    display: none;
  }
`;

export const ForgetPasswordButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: black;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  padding: 10px 20px;

  :hover {
    cursor: pointer;
    background-color: #00000050;
  }

  @media only screen and ${width[1000]} {
    width: 250px;
  }
`;
