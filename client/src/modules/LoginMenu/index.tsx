import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginMenu } from "./../../store/loginMenu/actions";
import { loginMenuIsOpenRX } from "../../store/loginMenu/selectors";
import { LoginMenuLayout } from "./layout";


export const LoginMenu = () => {

  const dispatch = useDispatch();
  const loginMenuIsOpen = useSelector(loginMenuIsOpenRX);

  const handleCloseLoginMenu = useCallback((e: React.MouseEvent) => {
    dispatch(toggleLoginMenu());
  }, []);

  return (
    <LoginMenuLayout
      isOpen={loginMenuIsOpen}
      handleCloseLoginMenu={handleCloseLoginMenu}
    />
  );
};
