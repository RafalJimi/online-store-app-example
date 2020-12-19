import styled from "styled-components";
import { width, maxHeight } from "../../helpers/mediaQueries";

export const ResetPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
  overflow-y: hidden;
  min-height: calc(100vh - 392px);
  margin-top: 60px;

  @media only screen and ${width[1300]} {
    margin-top: 157px;
  }

  @media only screen and ${maxHeight[600]} {
    min-height: 300px;
  }
`;

export const ResetPasswordContent = styled.main`
  display: flex;
  flex-direction: row;
`;

export const ResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  padding: 20px 30px;

  @media only screen and ${width[750]} {
    margin-top: 0px;
  }
`;

type ResetPasswordInputContainerProps = {
  prop: string;
};

export const ResetPasswordInputContainer = styled.div<ResetPasswordInputContainerProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: ${(props) => props.theme.borders.secondary};
  width: 250px;

  border-bottom: ${({ prop }) =>
    prop ? "1px solid #000000" : "1px solid #808080"};

  :focus {
    border: ${(props) => props.theme.borders.primary};
  }

  i {
    text-align: center;
    font-size: 1.1em;
  }
`;

export const ResetPasswordInput = styled.input`
  padding: 8px 0px;
  border: none;
  font-size: 1em;
  width: 100%;

  :focus {
    outline: none;
  }

  @media only screen and ${width[660]} {
    width: 230px;
  }
`;

export const ResetPasswordInputIcon = styled.div`
  width: 30px;
  text-align: center;
`;

export const ResetPasswordInputErrorMessage = styled.div`
  display: row;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-bottom: 15px;
  padding-top: 5px;
  font-size: 0.6em;
  border: none;
  color: ${(props) => props.theme.colors.warning};
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

  @media only screen and ${width[750]} {
    display: none;
  }
`;

export const ResetPasswordButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  font-size: 1em;
  border-radius: 5px;
  padding: 10px 20px;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media only screen and ${width[1000]} {
    width: 250px;
  }
`;
