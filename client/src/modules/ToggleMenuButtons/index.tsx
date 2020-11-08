import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginMenu } from "../../store/loginMenu/actions";
import { loginMenuIsOpenRX } from "../../store/loginMenu/selectors";
import { toggleRegisterMenu } from "../../store/registerMenu/actions";
import { registerMenuIsOpenRX } from "../../store/registerMenu/selectors";
import { ToggleMenuButtonsLayout } from "./layout";

export const ToggleMenuButtons = () => {
  const loginMenuIsOpen = useSelector(loginMenuIsOpenRX);
  const registerMenuIsOpen = useSelector(registerMenuIsOpenRX);

  const dispatch = useDispatch();

  const handleLoginMenuButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleLoginMenu());
    dispatch(toggleRegisterMenu());
  }, []);

  const handleRegisterMenuButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleRegisterMenu());
    dispatch(toggleLoginMenu());
  }, []);

  return (
    <ToggleMenuButtonsLayout
      loginMenuIsOpen={loginMenuIsOpen}
      registerMenuIsOpen={registerMenuIsOpen}
      handleLoginMenuButton={handleLoginMenuButton}
      handleRegisterMenuButton={handleRegisterMenuButton}
    />
  );
};
