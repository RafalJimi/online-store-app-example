import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { userMenuIsOpenRX } from "../../../../store/userMenu/selectors";
import { loginMenuIsOpenRX } from "../../../../store/loginMenu/selectors";
import { searchMenuIsOpenRX } from "../../../../store/searchMenu/selectors";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { toggleSearchMenu } from "../../../../store/searchMenu/actions";
import { toggleUserMenu } from "../../../../store/userMenu/actions";
import { LeftMenuLayout } from "./layout";

export const LeftMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);
  const searchMenuIsOpen = useSelector(searchMenuIsOpenRX);
  const loginMenuIsOpen = useSelector(loginMenuIsOpenRX);
  const userMenuIsOpen = useSelector(userMenuIsOpenRX);
  

  const handleOnClick = useCallback(
    (gender: string, category?: string, subCategory?: string) => (
      e: React.MouseEvent
    ) => {
      if (searchMenuIsOpen) dispatch(toggleSearchMenu());
      if (loginMenuIsOpen) dispatch(toggleLoginMenu());
      if (burgerMenuIsOpen) dispatch(toggleBurgerMenu());
      if (userMenuIsOpen) dispatch(toggleUserMenu());
      history.push(
        `/products?gender=${gender}&category=${category}&subCategory=${subCategory}`
      );
    },
    [searchMenuIsOpen, loginMenuIsOpen, burgerMenuIsOpen, userMenuIsOpen]
  );

  return <LeftMenuLayout handleOnClick={handleOnClick} />;
};
