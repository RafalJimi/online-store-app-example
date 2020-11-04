import React, { useState, useCallback, ChangeEvent } from "react";
import { RegisterFormLayout } from "./layout";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    email: "",
    password: "",
    textChange: "login",
    emailError: "",
    passwordError: "",
  });
  const [ShowPassword, setShowPassword] = useState(false);

  const handleChange = (text: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleToggleShowPassword = useCallback(
    (e: React.MouseEvent) => {
      setShowPassword(!ShowPassword);
    },
    [ShowPassword]
  );

  const handleCreateAnAccountButton = useCallback((e: React.MouseEvent) => {
    console.log("it works");
  }, []);

  return (
    <RegisterFormLayout
      handleChange={handleChange}
      gender={formData.gender}
      email={formData.email}
      password={formData.password}
      emailError={formData.emailError}
      passwordError={formData.passwordError}
      showPassword={ShowPassword}
      handleToggleShowPassword={handleToggleShowPassword}
      handleCreateAnAccountButton={handleCreateAnAccountButton}
    />
  );
};
