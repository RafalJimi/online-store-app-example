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
  handleChange: (text: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  gender: string;
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  showPassword: boolean;
  handleToggleShowPassword: (e: React.MouseEvent) => void;
  handleCreateAnAccountButton: (e: React.MouseEvent) => void;
};

export const RegisterFormLayout = ({
  handleChange,
  gender,
  email,
  password,
  emailError,
  passwordError,
  showPassword,
  handleToggleShowPassword,
}: RegisterFormProps) => (
  <RegisterFormContainer>
    <RegisterMenuTitle>Create an account</RegisterMenuTitle>
    <InputsContainer>
      <RadioInputContainer>
        <input
          type="radio"
          value="man"
          name="gender"
          checked={gender === "man"}
          onChange={handleChange("gender")}
        />
        <span>Man</span>
      </RadioInputContainer>
      <RadioInputContainer>
        <input
          type="radio"
          value="woman"
          name="gender"
          checked={gender === "woman"}
          onChange={handleChange("gender")}
        />
        <span>Woman</span>
      </RadioInputContainer>
    </InputsContainer>
    <FullNameContainer>
      <FullNameInputContainer>
        <FullNameInput
          firstName={""}
          type="text"
          placeholder="First name"
          onChange={handleChange("email")}
          value={""}
        />
        <FullNameInputError>Test</FullNameInputError>
      </FullNameInputContainer>
      <FullNameInputContainer>
        <FullNameInput
          firstName={""}
          type="text"
          placeholder="Last name"
          onChange={handleChange("email")}
          value={""}
        />
        <FullNameInputError>Test</FullNameInputError>
      </FullNameInputContainer>
    </FullNameContainer>
    <RegisterFormInputContainer prop={email}>
      <RegisterFormInput
        type="email"
        placeholder="E-mail adress"
        onChange={handleChange("email")}
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
        onChange={handleChange("password")}
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
      <input name="rules" type="checkbox" checked={true} onChange={() => {}} />
      <span>
        I have read and uderstood the information on the use of my personal data
        set out in <b>Privacy policy</b>.
      </span>
    </RegisterFormCheckboxContainer>
    <RegisterFormInputErrorMessage>
      <p>{emailError}</p>
    </RegisterFormInputErrorMessage>
    <RegisterFormSubmitButton>Create an account</RegisterFormSubmitButton>
    <LoginButton>Begin the session</LoginButton>
  </RegisterFormContainer>
);
