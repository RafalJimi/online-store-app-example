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
  handleChange: (text: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  showPassword: boolean;
  handleToggleShowPassword: (e: React.MouseEvent) => void;
  ChangeLayout: boolean;
  handleCreateAnAccountButton: (e: React.MouseEvent) => void;
};

export const LoginFormLayout = ({
  handleChange,
  email,
  password,
  emailError,
  passwordError,
  showPassword,
  handleToggleShowPassword,
  ChangeLayout,
  handleCreateAnAccountButton,
}: LoginFormLayoutProps) => (
  <LoginFormContainer>
    <LoginContainerTitle>Begin the session</LoginContainerTitle>
    <LoginContainerSubTitle>
      Please enter your email address and password to log in
    </LoginContainerSubTitle>
    <LoginFormInputContainer prop={email}>
      <LoginFormInput
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
    </LoginFormInputContainer>
    <LoginFormInputErrorMessage>
      <p>{emailError}</p>
    </LoginFormInputErrorMessage>
    <LoginFormInputContainer prop={password}>
      <LoginFormInput
        type={showPassword ? "text" : "password"}
        placeholder="Password *"
        onChange={handleChange("password")}
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
    <LoginFormSubmitButton>Begin the session</LoginFormSubmitButton>
    {ChangeLayout ? (
      <CreateAccountLowResolution>
        You dont have an account yes?{" "}
        <span onClick={handleCreateAnAccountButton}>Register</span>
      </CreateAccountLowResolution>
    ) : (
      <>
        <CreateAccountTitle>You dont have an account?</CreateAccountTitle>
        <CreateAccountButton onClick={handleCreateAnAccountButton}>
          Create an account
        </CreateAccountButton>
      </>
    )}
  </LoginFormContainer>
);
