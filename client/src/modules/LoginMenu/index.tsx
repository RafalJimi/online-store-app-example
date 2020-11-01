import React, { useState, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginMenu } from "./../../store/loginMenu/actions";
import { loginMenuIsOpenRX } from "../../store/loginMenu/selectors";
import { LoginMenuLayout } from "./layout";

export const LoginMenu = () => {
  const [formData, setFormData] = useState({
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

  const dispatch = useDispatch();
  const loginMenuIsOpen = useSelector(loginMenuIsOpenRX);

  const handleCloseLoginMenu = useCallback((e: React.MouseEvent) => {
    dispatch(toggleLoginMenu());
  }, []);

  const handleToggleShowPassword = useCallback(
    (e: React.MouseEvent) => {
      setShowPassword(!ShowPassword);
    },
    [ShowPassword]
  );

  return (
    <LoginMenuLayout
      isOpen={loginMenuIsOpen}
      handleCloseLoginMenu={handleCloseLoginMenu}
      handleChange={handleChange}
      email={formData.email}
      password={formData.password}
      emailError={formData.emailError}
      passwordError={formData.passwordError}
      showPassword={ShowPassword}
      handleToggleShowPassword={handleToggleShowPassword}
    />
  );
};
