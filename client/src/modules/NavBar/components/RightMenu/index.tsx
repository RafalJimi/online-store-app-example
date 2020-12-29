import React, { memo, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { toggleSearchMenu } from "../../../../store/searchMenu/actions";
import { checkAuthStarted } from "../../../../store/checkAuth/actions";
import { logoutUserStarted } from "../../../../store/logoutUser/actions";
import { getCartItemsStarted } from "../../../../store/shopCart/actions";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { loginUserTokenRX } from "../../../../store/loginUser/selectors";
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
  const token = useSelector(loginUserTokenRX);
  const userRole = useSelector(userRoleRX);
  const itemsQuantity = useSelector(itemsQuantityRX);
  const shopCartItems = useSelector(shopCartItemsRX);

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
      history.push(location);
    },
    [itemsQuantity]
  );
  
  useEffect(() => {
    dispatch(checkAuthStarted());
  }, [token]);

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
    />
  );
});
