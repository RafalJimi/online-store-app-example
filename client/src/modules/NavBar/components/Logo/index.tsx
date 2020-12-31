import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogoContainer } from "./logo.styled";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { searchMenuIsOpenRX } from "../../../../store/searchMenu/selectors";
import { loginMenuIsOpenRX } from "../../../../store/loginMenu/selectors";
import { userMenuIsOpenRX } from "../../../../store/userMenu/selectors";
import { toggleSearchMenu } from "../../../../store/searchMenu/actions";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { toggleUserMenu } from "../../../../store/userMenu/actions";

export const Logo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);
  const searchMenuIsOpen = useSelector(searchMenuIsOpenRX);
  const loginMenuIsOpen = useSelector(loginMenuIsOpenRX);
  const userMenuIsOpen = useSelector(userMenuIsOpenRX);

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      if (searchMenuIsOpen) dispatch(toggleSearchMenu());
      if (loginMenuIsOpen) dispatch(toggleLoginMenu());
      if (burgerMenuIsOpen) dispatch(toggleBurgerMenu());
      if (userMenuIsOpen) dispatch(toggleUserMenu());
      history.push("/");
      window.scrollTo(0, 0);
    },
    [searchMenuIsOpen, loginMenuIsOpen, burgerMenuIsOpen, userMenuIsOpen]
  );

  return (
    <LogoContainer>
      <h2 onClick={handleOnClick}>Store-Example</h2>
    </LogoContainer>
  );
};
