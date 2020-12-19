import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { toggleSearchMenu } from "../../../../store/searchMenu/actions";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { toast } from "react-toastify";
import { RightMenuLayout } from "./layout";
import { getLocalStorage } from "../../../../helpers/auth";


export const RightMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);

  const handleToggleSearchMenu = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleSearchMenu());
    },
    [burgerMenuIsOpen]
  );
  
  const handleToggleBurgerMenuButton = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleBurgerMenu());
    },
    [burgerMenuIsOpen]
  );
  
  const handleOpenLoginMenuButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleLoginMenu());
  }, []);

  const handleBasketButton = useCallback(
    (url: string) => (e: React.MouseEvent) => {
      const basket = getLocalStorage("basket");
      basket !== null
        ? basket.length !== 0
          ? history.push(url)
          : toast.dark("Your basket is empty")
        : toast.dark("Your basket is empty");
    },
    []
  );
  
  return (
    <RightMenuLayout
      burgerMenuIsOpen={burgerMenuIsOpen}
      handleToggleSearchMenu={handleToggleSearchMenu}
      handleToggleBurgerMenuButton={handleToggleBurgerMenuButton}
      handleOpenLoginMenuButton={handleOpenLoginMenuButton}
      handleBasketButton={handleBasketButton}
    />
  );
};
