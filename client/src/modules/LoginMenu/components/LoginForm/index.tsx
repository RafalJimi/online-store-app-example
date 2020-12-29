import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loginUserStarted,
  clearLoginUserState,
} from "../../../../store/loginUser/actions";
import {
  loginUserTokenRX,
  loginUserIsErrorRX,
  loginUserIsLoadingRX,
} from "../../../../store/loginUser/selectors";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { loginMenuIsOpenRX } from "../../../../store/loginMenu/selectors";
import { toggleRegisterMenu } from "../../../../store/registerMenu/actions";
import { setLocalStorage } from "../../../../helpers/auth";
import { toast } from "react-toastify";
import { LoginFormLayout } from "./layout";
import { email } from "../../../../helpers/formats";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginUserToken = useSelector(loginUserTokenRX);
  const loginUserIsError = useSelector(loginUserIsErrorRX);
  const loginUserIsLoading = useSelector(loginUserIsLoadingRX);
  const loginMenuIsOpen = useSelector(loginMenuIsOpenRX);

  const [EmailInput, setEmailInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
  });

  const [PasswordInput, setPasswordInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
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
        error: "Please enter a valid e-mail",
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
    if (!EmailInput.error && !PasswordInput.error && EmailInput.value && PasswordInput.value) {
      const loginData = {
        email: EmailInput.value,
        password: PasswordInput.value,
      };
      dispatch(loginUserStarted(loginData));
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

  useEffect(() => {
    if (loginUserToken) {
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
      setLocalStorage("token", loginUserToken);
      dispatch(toggleLoginMenu());
    }
  }, [loginUserToken]);

  useEffect(() => {
    if (loginUserIsError) toast.dark(loginUserIsError);
  }, [loginUserIsError]);

  useEffect(() => {
    if (!loginMenuIsOpen) dispatch(clearLoginUserState());
  }, [loginMenuIsOpen]);

  const handleCreateAnAccountButton = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleLoginMenu());
      dispatch(toggleRegisterMenu());
    },
    []
  );

  const handleForgetPasswordButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleLoginMenu());
    history.push("/users/password/forget");
  }, []);

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
      loginUserIsLoading={loginUserIsLoading}
      handleForgetPasswordButton={handleForgetPasswordButton}
    />
  );
};
