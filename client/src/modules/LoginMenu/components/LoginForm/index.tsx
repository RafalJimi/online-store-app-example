import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { toggleRegisterMenu } from "../../../../store/registerMenu/actions";
import { LoginFormLayout } from "./layout";
import { email } from "../../../../helpers/formats";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [EmailInput, setEmailInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
  });

  const [PasswordInput, setPasswordInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
    showPassword: false,
  });

  const [ShowPassword, setShowPassword] = useState(false);

  // EmailInput handlers

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (EmailInput.textChange === "notChanged")
      setEmailInput({
        ...EmailInput,
        value: e.target.value,
        textChange: "changed",
      });
    else
      setEmailInput({
        ...EmailInput,
        value: e.target.value,
      });
  };

  useEffect(() => {
    if (EmailInput.textChange === "changed" && EmailInput.value === "")
      setEmailInput({ ...EmailInput, error: "This field must be completed" });
    else if (
      !email.test(EmailInput.value) &&
      EmailInput.textChange === "changed"
    )
      setEmailInput({
        ...EmailInput,
        error: "Please enter a valid e-mail password",
      });
    else setEmailInput({ ...EmailInput, error: "" });
  }, [EmailInput.value]);

  // PasswordInput handlers

  const handlePasswordInput = (text: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (PasswordInput.textChange === "notChanged")
      setPasswordInput({
        ...PasswordInput,
        value: e.target.value,
        textChange: "changed",
      });
    else
      setPasswordInput({
        ...PasswordInput,
        value: e.target.value,
      });
  };

  useEffect(() => {
    if (PasswordInput.textChange === "changed" && PasswordInput.value === "")
      setPasswordInput({
        ...PasswordInput,
        error: "This field must be completed",
      });
    else setPasswordInput({ ...PasswordInput, error: "" });
  }, [PasswordInput.value]);

  const handleToggleShowPassword = useCallback(
    (e: React.MouseEvent) => {
      setShowPassword(!ShowPassword);
    },
    [ShowPassword]
  );

  // Submit form

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EmailInput.error && !PasswordInput.error) {
      const loginData = {
        login: EmailInput.value,
        password: PasswordInput.value,
      };
      console.log(loginData);
      setEmailInput({
        ...EmailInput,
        value: "",
        error: "",
        textChange: "notChanged",
      });
      setPasswordInput({
        ...PasswordInput,
        value: "",
        error: "",
        textChange: "notChanged",
      });
    }
  };

  const handleCreateAnAccountButton = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleLoginMenu());
      dispatch(toggleRegisterMenu());
    },
    [dispatch]
  );

  return (
    <LoginFormLayout
      handleEmailInput={handleEmailInput}
      handlePasswordInput={handlePasswordInput}
      email={EmailInput.value}
      emailError={EmailInput.error}
      password={PasswordInput.value}
      passwordError={PasswordInput.error}
      showPassword={ShowPassword}
      handleToggleShowPassword={handleToggleShowPassword}
      handleCreateAnAccountButton={handleCreateAnAccountButton}
      handleSubmit={handleSubmit}
    />
  );
};
