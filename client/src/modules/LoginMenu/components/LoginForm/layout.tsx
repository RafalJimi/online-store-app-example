import React, { ChangeEvent } from "react";
import {
  LoginContainerTitle,
  LoginContainerSubTitle,
  LoginFormContainer,
  LoginFormInputContainer,
  LoginFormInput,
  LoginFormInputErrorMessage,
  LoginFormInputIcon,
  ForgotPasswordButton,
  LoginFormSubmitButton,
  CreateAccountTitle,
  CreateAccountButton,
  CreateAccountLowResolution,
} from "./layout.styled";

type LoginFormLayoutProps = {
  handleEmailInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (
    text: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  showPassword: boolean;
  handleToggleShowPassword: (e: React.MouseEvent) => void;
  handleCreateAnAccountButton: (e: React.MouseEvent) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loginUserIsLoading: boolean;
};

export const LoginFormLayout = ({
  handleEmailInput,
  handlePasswordInput,
  email,
  password,
  emailError,
  passwordError,
  showPassword,
  handleToggleShowPassword,
  handleCreateAnAccountButton,
  handleSubmit,
  loginUserIsLoading,
}: LoginFormLayoutProps) => (
  <LoginFormContainer onSubmit={handleSubmit}>
    <LoginContainerTitle>Begin the session</LoginContainerTitle>
    <LoginContainerSubTitle>
      Please enter your email address and password to log in
    </LoginContainerSubTitle>
    <LoginFormInputContainer prop={email}>
      <LoginFormInput
        type="email"
        placeholder="Email *"
        onChange={handleEmailInput}
        value={email}
      />
      {email && (
        <LoginFormInputIcon>
          {!emailError ? (
            <i className="fas fa-check" />
          ) : (
            <i className="fas fa-times" />
          )}
        </LoginFormInputIcon>
      )}
    </LoginFormInputContainer>
    <LoginFormInputErrorMessage>
      <p>{emailError}</p>
    </LoginFormInputErrorMessage>
    <LoginFormInputContainer prop={password}>
      <LoginFormInput
        type={showPassword ? "text" : "password"}
        placeholder="Password *"
        onChange={handlePasswordInput("value")}
        value={password}
      />
      {showPassword ? (
        <i onClick={handleToggleShowPassword} className="far fa-eye-slash" />
      ) : (
        <i onClick={handleToggleShowPassword} className="far fa-eye" />
      )}
    </LoginFormInputContainer>
    <LoginFormInputErrorMessage>
      <p>{passwordError}</p>
    </LoginFormInputErrorMessage>
    <ForgotPasswordButton>
      <p>I forgot my password</p>
    </ForgotPasswordButton>
    <LoginFormSubmitButton>
      {loginUserIsLoading ? (
        <i
          className="fas fa-circle-notch fa-spin 1x w-6  -ml-2"
        ></i>
      ) : (
        <>
          <span>Begin the session</span>
        </>
      )}
    </LoginFormSubmitButton>
    <CreateAccountLowResolution>
      You dont have an account yet?{" "}
      <span onClick={handleCreateAnAccountButton}>Register</span>
    </CreateAccountLowResolution>
    <CreateAccountTitle>You dont have an account?</CreateAccountTitle>
    <CreateAccountButton onClick={handleCreateAnAccountButton}>
      Create an account
    </CreateAccountButton>
  </LoginFormContainer>
);
