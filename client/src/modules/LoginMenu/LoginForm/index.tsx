import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { toggleRegisterMenu } from "../../../store/registerMenu/actions";
import { LoginFormLayout } from "./layout";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    textChange: "login",
    emailError: "",
    passwordError: "",
  });
  const [ShowPassword, setShowPassword] = useState(false);
  const [ChangeLayout, setChangeLayout] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setChangeLayout(true);
    } else setChangeLayout(false);
  }, [window.innerWidth]);

  const handleChange = (text: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleToggleShowPassword = useCallback(
    (e: React.MouseEvent) => {
      setShowPassword(!ShowPassword);
    },
    [ShowPassword]
  );

  const handleCreateAnAccountButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleRegisterMenu());
  }, []);

  return (
    <LoginFormLayout
      handleChange={handleChange}
      email={formData.email}
      password={formData.password}
      emailError={formData.emailError}
      passwordError={formData.passwordError}
      showPassword={ShowPassword}
      handleToggleShowPassword={handleToggleShowPassword}
      ChangeLayout={ChangeLayout}
      handleCreateAnAccountButton={handleCreateAnAccountButton}
    />
  );
};
