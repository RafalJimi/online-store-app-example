import React, { ChangeEvent } from "react";
import {
  LoginMenuContainer,
  CloseLoginMenu,
  LoginContainer,
  CloseLoginMenuButton,
  LoginContainerTitle,
  LoginContainerSubTitle,
  LoginFormContainer,
  LoginFormEmailInputContainer,
  LoginFormPasswordInputContainer,
  LoginFormInput,
  LoginFormInputErrorMessage,
  LoginFormInputIcon,
  ForgotPasswordButton,
  LoginFormSubmitButton,
  CreateAccountTitle,
  CreateAccountButton,
} from "./layout.styled";

type LoginMenuLayoutProps = {
  isOpen: boolean;
  handleCloseLoginMenu: (e: React.MouseEvent) => void;
  handleChange: (text: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  showPassword: boolean;
  handleToggleShowPassword: (e: React.MouseEvent) => void;
};

export const LoginMenuLayout = ({
  isOpen,
  handleCloseLoginMenu,
  handleChange,
  email,
  password,
  emailError,
  passwordError,
  showPassword,
  handleToggleShowPassword,
}: LoginMenuLayoutProps) => (
  <LoginMenuContainer isOpen={isOpen}>
    <CloseLoginMenu onClick={handleCloseLoginMenu}></CloseLoginMenu>
    <LoginContainer>
      <CloseLoginMenuButton onClick={handleCloseLoginMenu}>
        <i className="fas fa-times" />
      </CloseLoginMenuButton>
      <LoginContainerTitle>Begin the session</LoginContainerTitle>
      <LoginContainerSubTitle>
        Please enter your email address and password to log in
      </LoginContainerSubTitle>
      <LoginFormContainer>
        <LoginFormEmailInputContainer email={email}>
          <LoginFormInput
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="email"
            placeholder="Email *"
            onChange={handleChange("email")}
            value={email}
          />
          {email && (
            <LoginFormInputIcon>
              {emailError !== "" ? (
                <i className="fas fa-check" />
              ) : (
                <i className="fas fa-times" />
              )}
            </LoginFormInputIcon>
          )}
        </LoginFormEmailInputContainer>
        <LoginFormInputErrorMessage>
          <p>{emailError}</p>
        </LoginFormInputErrorMessage>
        <LoginFormPasswordInputContainer password={password}>
          <LoginFormInput
            type={showPassword ? "text" : "password"}
            placeholder="Password *"
            onChange={handleChange("password")}
            value={password}
          />
          {showPassword ? (
            <i
              onClick={handleToggleShowPassword}
              className="far fa-eye-slash"
            />
          ) : (
            <i onClick={handleToggleShowPassword} className="far fa-eye" />
          )}
        </LoginFormPasswordInputContainer>
        <LoginFormInputErrorMessage>{passwordError}</LoginFormInputErrorMessage>
        <ForgotPasswordButton>
          <p>I forgot my password</p>
        </ForgotPasswordButton>
        <LoginFormSubmitButton>Begin the session</LoginFormSubmitButton>
      </LoginFormContainer>
      <CreateAccountTitle>You dont have an account?</CreateAccountTitle>
      <CreateAccountButton>Create an account</CreateAccountButton>
    </LoginContainer>
  </LoginMenuContainer>
);
