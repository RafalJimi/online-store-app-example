import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { toggleRegisterMenu } from "../../../../store/registerMenu/actions";
import { registerMenuIsOpenRX } from "../../../../store/registerMenu/selectors";
import { registerUserStarted } from "../../../../store/registerUser/actions";
import {
  registerResultMessageRX,
  registerResultIsErrorRX,
  registerUserIsLoadingRX,
} from "../../../../store/registerUser/selectors";
import { toast } from "react-toastify";
import { RegisterFormLayout } from "./layout";
import {
  onlyLetters,
  email,
  lettersAndNumbers,
} from "../../../../helpers/formats";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const registerResultMessage = useSelector(registerResultMessageRX);
  const registerResultIsError = useSelector(registerResultIsErrorRX);
  const registerUserIsLoading = useSelector(registerUserIsLoadingRX);
  const registerMenuIsOpen = useSelector(registerMenuIsOpenRX);

  // Inputs data

  const [Gender, setGender] = useState("man");

  const [FirstNameInput, setFirstNameInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
  });

  const [LastNameInput, setLastNameInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
  });

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

  const [ConfirmRules, setConfirmRules] = useState({
    value: false,
    textChange: "notChanged",
    error: "",
  });

  // Gender handler

  const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  // FirstNameInput handlers

  const handleFirstNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (FirstNameInput.textChange === "notChanged")
      setFirstNameInput({
        ...FirstNameInput,
        value: e.target.value,
        textChange: "changed",
      });
    else
      setFirstNameInput({
        ...FirstNameInput,
        value: e.target.value,
      });
  };

  useEffect(() => {
    if (FirstNameInput.textChange === "changed" && FirstNameInput.value === "")
      setFirstNameInput({
        ...FirstNameInput,
        error: "This field must be completed",
      });
    else if (
      FirstNameInput.value.length < 2 &&
      FirstNameInput.textChange === "changed"
    )
      setFirstNameInput({
        ...FirstNameInput,
        error: "Required min 2 characters",
      });
    else if (
      !onlyLetters.test(FirstNameInput.value) &&
      FirstNameInput.textChange === "changed"
    )
      setFirstNameInput({
        ...FirstNameInput,
        error: "Required only letters",
      });
    else setFirstNameInput({ ...FirstNameInput, error: "" });
  }, [FirstNameInput.value]);

  // LastNameInput handlers

  const handleLastNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (LastNameInput.textChange === "notChanged")
      setLastNameInput({
        ...LastNameInput,
        value: e.target.value,
        textChange: "changed",
      });
    else
      setLastNameInput({
        ...LastNameInput,
        value: e.target.value,
      });
  };

  useEffect(() => {
    if (LastNameInput.textChange === "changed" && LastNameInput.value === "")
      setLastNameInput({
        ...LastNameInput,
        error: "This field must be completed",
      });
    else if (
      LastNameInput.value.length < 2 &&
      LastNameInput.textChange === "changed"
    )
      setLastNameInput({
        ...LastNameInput,
        error: "Required min 2 characters",
      });
    else if (
      !onlyLetters.test(LastNameInput.value) &&
      LastNameInput.textChange === "changed"
    )
      setLastNameInput({
        ...LastNameInput,
        error: "Required only letters",
      });
    else setLastNameInput({ ...LastNameInput, error: "" });
  }, [LastNameInput.value]);

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
    else if (
      PasswordInput.value.length < 6 &&
      PasswordInput.textChange === "changed"
    )
      setPasswordInput({
        ...PasswordInput,
        error: "Required min 6 characters",
      });
    else if (
      !lettersAndNumbers.test(PasswordInput.value) &&
      PasswordInput.textChange === "changed"
    )
      setPasswordInput({
        ...PasswordInput,
        error: "Password must contain letters and numbers",
      });
    else setPasswordInput({ ...PasswordInput, error: "" });
  }, [PasswordInput.value]);

  const handleToggleShowPassword = useCallback(
    (e: React.MouseEvent) => {
      setShowPassword(!ShowPassword);
    },
    [ShowPassword]
  );

  const handleConfirmRules = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmRules({
        ...ConfirmRules,
        value: !ConfirmRules.value,
        textChange: "changed",
      });
    },
    [ConfirmRules]
  );

  useEffect(() => {
    if (ConfirmRules.textChange === "changed" && ConfirmRules.value === false)
      setConfirmRules({
        ...ConfirmRules,
        error: "This field must be checked",
      });
    else setConfirmRules({ ...ConfirmRules, error: "" });
  }, [ConfirmRules.value]);

  // Submit form

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      FirstNameInput.textChange === "notChanged" ||
      LastNameInput.textChange === "notChanged" ||
      EmailInput.textChange === "notChanged" ||
      PasswordInput.textChange === "notChanged"
    )
      setConfirmRules({ ...ConfirmRules, error: "Please fill all fields" });
    else if (ConfirmRules.textChange === "notChanged")
      setConfirmRules({ ...ConfirmRules, error: "This field must be checked" });
    else if (
      FirstNameInput.error === "" &&
      LastNameInput.error === "" &&
      EmailInput.error === "" &&
      PasswordInput.error === ""
    ) {
      const registerData = {
        gender: Gender,
        firstName: FirstNameInput.value,
        lastName: LastNameInput.value,
        email: EmailInput.value,
        password: PasswordInput.value,
      };
      dispatch(registerUserStarted(registerData));
    }
  };

  useEffect(() => {
    if (registerResultMessage) {
      toast.dark(registerResultMessage);
      dispatch(toggleRegisterMenu());
    };
  }, [registerResultMessage]);

  useEffect(() => {
    if (registerResultIsError) toast.dark(registerResultIsError);
  }, [registerResultIsError]);

  const handleLoginButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleRegisterMenu());
    dispatch(toggleLoginMenu());
  }, []);

  useEffect(() => {
    if (!registerMenuIsOpen) {
      setGender("man");
      setFirstNameInput({
        ...FirstNameInput,
        value: "",
        error: "",
        textChange: "notChanged",
      });
      setLastNameInput({
        ...LastNameInput,
        value: "",
        error: "",
        textChange: "notChanged",
      });
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
      setConfirmRules({
        ...ConfirmRules,
        value: false,
        error: "",
        textChange: "notChanged",
      });
    }
  }, [registerMenuIsOpen]);

  return (
    <RegisterFormLayout
      handleGender={handleGender}
      handleFirstNameInput={handleFirstNameInput}
      handleLastNameInput={handleLastNameInput}
      handleEmailInput={handleEmailInput}
      handlePasswordInput={handlePasswordInput}
      handleToggleShowPassword={handleToggleShowPassword}
      handleConfirmRules={handleConfirmRules}
      gender={Gender}
      firstName={FirstNameInput.value}
      lastName={LastNameInput.value}
      email={EmailInput.value}
      password={PasswordInput.value}
      showPassword={ShowPassword}
      confirmRules={ConfirmRules.value}
      firstNameError={FirstNameInput.error}
      lastNameError={LastNameInput.error}
      emailError={EmailInput.error}
      passwordError={PasswordInput.error}
      confirmRulesError={ConfirmRules.error}
      handleSubmit={handleSubmit}
      handleLoginButton={handleLoginButton}
      registerUserIsLoading={registerUserIsLoading}
    />
  );
};
