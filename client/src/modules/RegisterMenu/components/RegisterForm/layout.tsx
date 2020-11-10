import React, { ChangeEvent } from "react";
import {
  RegisterFormContainer,
  RegisterMenuTitle,
  InputsContainer,
  RadioInputContainer,
  FullNameContainer,
  LoginButton,
  FullNameInputContainer,
  FullNameInput,
  FullNameInputError,
  RegisterFormInputContainer,
  RegisterFormInput,
  RegisterFormInputIcon,
  RegisterFormInputErrorMessage,
  RegisterFormCheckboxContainer,
  RegisterFormSubmitButton,
} from "./layout.styled";

type RegisterFormProps = {
  handleGender: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFirstNameInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLastNameInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (
    text: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleToggleShowPassword: (e: React.MouseEvent) => void;
  handleConfirmRules: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLoginButton: (e: React.MouseEvent) => void;
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  showPassword: boolean;
  confirmRules: boolean;
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  passwordError: string;
  confirmRulesError: string;
  registerUserIsLoading: boolean;
};

export const RegisterFormLayout = ({
  handleGender,
  handleFirstNameInput,
  handleLastNameInput,
  handleEmailInput,
  handlePasswordInput,
  handleToggleShowPassword,
  handleConfirmRules,
  handleSubmit,
  handleLoginButton,
  gender,
  firstName,
  lastName,
  email,
  password,
  confirmRules,
  firstNameError,
  lastNameError,
  emailError,
  passwordError,
  confirmRulesError,
  showPassword,
  registerUserIsLoading,
}: RegisterFormProps) => (
  <RegisterFormContainer onSubmit={handleSubmit}>
    <RegisterMenuTitle>Create an account</RegisterMenuTitle>
    <InputsContainer>
      <RadioInputContainer>
        <input
          type="radio"
          value="man"
          name="gender"
          checked={gender === "man"}
          onChange={handleGender}
        />
        <span>Man</span>
      </RadioInputContainer>
      <RadioInputContainer>
        <input
          type="radio"
          value="woman"
          name="gender"
          checked={gender === "woman"}
          onChange={handleGender}
        />
        <span>Woman</span>
      </RadioInputContainer>
    </InputsContainer>
    <FullNameContainer>
      <FullNameInputContainer>
        <FullNameInput
          prop={firstName}
          type="text"
          placeholder="First name"
          onChange={handleFirstNameInput}
          value={firstName}
        />
        <FullNameInputError>{firstNameError}</FullNameInputError>
      </FullNameInputContainer>
      <FullNameInputContainer>
        <FullNameInput
          prop={lastName}
          type="text"
          placeholder="Last name"
          onChange={handleLastNameInput}
          value={lastName}
        />
        <FullNameInputError>{lastNameError}</FullNameInputError>
      </FullNameInputContainer>
    </FullNameContainer>
    <RegisterFormInputContainer prop={email}>
      <RegisterFormInput
        type="email"
        placeholder="E-mail adress"
        onChange={handleEmailInput}
        value={email}
      />
      {email && (
        <RegisterFormInputIcon>
          {emailError !== "" ? (
            <i className="fas fa-check" />
          ) : (
            <i className="fas fa-times" />
          )}
        </RegisterFormInputIcon>
      )}
    </RegisterFormInputContainer>
    <RegisterFormInputErrorMessage>
      <p>{emailError}</p>
    </RegisterFormInputErrorMessage>
    <RegisterFormInputContainer prop={password}>
      <RegisterFormInput
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={handlePasswordInput("value")}
        value={password}
      />
      {showPassword ? (
        <i onClick={handleToggleShowPassword} className="far fa-eye-slash" />
      ) : (
        <i onClick={handleToggleShowPassword} className="far fa-eye" />
      )}
    </RegisterFormInputContainer>
    <RegisterFormInputErrorMessage>
      <p>{passwordError}</p>
    </RegisterFormInputErrorMessage>
    <RegisterFormCheckboxContainer>
      <input
        name="rules"
        type="checkbox"
        checked={confirmRules}
        onChange={handleConfirmRules}
      />
      <span>
        I have read and uderstood the information on the use of my personal data
        set out in <b>Privacy policy</b>.
      </span>
    </RegisterFormCheckboxContainer>
    <RegisterFormInputErrorMessage>
      <p>{confirmRulesError}</p>
    </RegisterFormInputErrorMessage>
    <RegisterFormSubmitButton type="submit">
      {registerUserIsLoading ? (
        <i
          className="fas fa-circle-notch fa-spin 1x w-6  -ml-2"
          style={{ fontSize: 25 }}
        ></i>
      ) : (
        <>
          <span>Create an account</span>
        </>
      )}
    </RegisterFormSubmitButton>
    <LoginButton type="button" onClick={handleLoginButton}>
      Begin the session
    </LoginButton>
  </RegisterFormContainer>
);
