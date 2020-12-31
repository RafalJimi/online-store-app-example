import React, { memo, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { toggleSearchMenu } from "../../../../store/searchMenu/actions";
import { checkAuthStarted } from "../../../../store/checkAuth/actions";
import { logoutUserStarted } from "../../../../store/logoutUser/actions";
import { getCartItemsStarted } from "../../../../store/shopCart/actions";
import { toggleUserMenu } from "../../../../store/userMenu/actions";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { loginUserTokenRX } from "../../../../store/loginUser/selectors";
import { searchMenuIsOpenRX } from "../../../../store/searchMenu/selectors";
import { loginMenuIsOpenRX } from "../../../../store/loginMenu/selectors";
import { userMenuIsOpenRX } from "../../../../store/userMenu/selectors";
import { userRoleRX } from "../../../../store/checkAuth/selectors"; 
import {
  itemsQuantityRX,
  shopCartItemsRX,
} from "../../../../store/shopCart/selectors"; 
import { toast } from "react-toastify";
import { RightMenuLayout } from "./layout";

export const RightMenu = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);
  const searchMenuIsOpen = useSelector(searchMenuIsOpenRX);
  const loginMenuIsOpen = useSelector(loginMenuIsOpenRX);
  const userMenuIsOpen = useSelector(userMenuIsOpenRX);

  const token = useSelector(loginUserTokenRX);
  const userRole = useSelector(userRoleRX);
  const itemsQuantity = useSelector(itemsQuantityRX);
  const shopCartItems = useSelector(shopCartItemsRX);

  const handleToggleSearchMenu = useCallback(
    (e: React.MouseEvent) => {
      if (burgerMenuIsOpen) dispatch(toggleBurgerMenu());
      dispatch(toggleSearchMenu());
    },
    [burgerMenuIsOpen, searchMenuIsOpen]
  );

  const handleToggleBurgerMenuButton = useCallback(
    (e: React.MouseEvent) => {
      if (searchMenuIsOpen) dispatch(toggleSearchMenu());
      if (loginMenuIsOpen) dispatch(toggleLoginMenu());
      if (userMenuIsOpen) dispatch(toggleUserMenu());
      dispatch(toggleBurgerMenu());
    },
    [burgerMenuIsOpen, searchMenuIsOpen, loginMenuIsOpen, userMenuIsOpen]
  );

  const handleOpenLoginMenuButton = useCallback(
    (e: React.MouseEvent) => {
      if (searchMenuIsOpen) dispatch(toggleSearchMenu());
      if (burgerMenuIsOpen) dispatch(toggleBurgerMenu());
      dispatch(toggleLoginMenu());
    },
    [searchMenuIsOpen, burgerMenuIsOpen]
  );

  const handleLogoutUser = useCallback((e: React.MouseEvent) => {
    dispatch(logoutUserStarted());
    history.push("/");
  }, []);

  const handleBasketButton = useCallback(
    (url: string) => (e: React.MouseEvent) => {
      itemsQuantity
        ? history.push("/shop-cart")
        : toast.dark("Your basket is empty");
    },
    [itemsQuantity, shopCartItems]
  );

  useEffect(() => {
    dispatch(getCartItemsStarted());
  }, []);

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      if (searchMenuIsOpen) dispatch(toggleSearchMenu());
      if (burgerMenuIsOpen) dispatch(toggleBurgerMenu());
      history.push(location);
    },
    [itemsQuantity, searchMenuIsOpen, burgerMenuIsOpen]
  );

  useEffect(() => {
    dispatch(checkAuthStarted());
  }, [token]);

  const handleUserMenu = useCallback(
    (e: React.MouseEvent) => {
      if (searchMenuIsOpen) dispatch(toggleSearchMenu());
      if (burgerMenuIsOpen) dispatch(toggleBurgerMenu());
      dispatch(toggleUserMenu());
    },
    [userMenuIsOpen, searchMenuIsOpen, burgerMenuIsOpen]
  );

  return (
    <RightMenuLayout
      burgerMenuIsOpen={burgerMenuIsOpen}
      handleToggleSearchMenu={handleToggleSearchMenu}
      handleToggleBurgerMenuButton={handleToggleBurgerMenuButton}
      handleOpenLoginMenuButton={handleOpenLoginMenuButton}
      handleBasketButton={handleBasketButton}
      handleLogoutUser={handleLogoutUser}
      role={userRole}
      handleOnClick={handleOnClick}
      handleUserMenu={handleUserMenu}
      userMenuIsOpen={userMenuIsOpen}
    />
  );
});
