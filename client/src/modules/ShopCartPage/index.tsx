import React, { useState, useEffect, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { toggleRegisterMenu } from "../../store/registerMenu/actions";
import { getCartItemsStarted } from "../../store/shopCart/actions";
import { checkAuthStarted } from "../../store/checkAuth/actions";
import { shopCartItemsRX } from "../../store/shopCart/selectors";
import { userRoleRX } from "../../store/checkAuth/selectors";
import { setLocalStorage } from "../../helpers/auth";
import { ShopCartPageLayout } from "./layout";

export const ShopCartPage = memo(() => {
  const [TotalPrice, setTotalPrice] = useState(0);
  const [IsError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const shopCartItems = useSelector(shopCartItemsRX);
  const userRole = useSelector(userRoleRX);

  useEffect(() => {
    dispatch(getCartItemsStarted());
    dispatch(checkAuthStarted());
  }, []);

  useEffect(() => {
    userRole ? setIsError(false) : setIsError(true);
  }, [userRole]);

  useEffect(() => {
    const sumPrice = shopCartItems.reduce(
      (sum, item) => sum + item.sumPrice,
      0
    );
    setTotalPrice(sumPrice);
    setLocalStorage("totalPrice", sumPrice);
  }, [shopCartItems, TotalPrice]);

  const handleOrderButton = useCallback(
    (e: React.MouseEvent) => {
      if (!IsError) history.push("/order");
    },
    [shopCartItems, IsError]
  );

  const handleCreateAccount = useCallback((e: React.MouseEvent) => {
    dispatch(toggleRegisterMenu());
  }, []);

  return (
    <ShopCartPageLayout
      cartItems={shopCartItems}
      totalPrice={TotalPrice}
      handleOrderButton={handleOrderButton}
      error={IsError}
      handleCreateAccount={handleCreateAccount}
    />
  );
});
