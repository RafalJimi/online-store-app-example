import React, { useState, useEffect, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { toggleRegisterMenu } from "../../store/registerMenu/actions";
import { getCartItemsStarted } from "../../store/shopCart/actions";
import { shopCartItemsRX } from "../../store/shopCart/selectors";
import { setLocalStorage } from "../../helpers/auth";
import { ShopCartPageLayout } from "./layout";

export const ShopCartPage = memo(() => {
  const [TotalPrice, setTotalPrice] = useState(0);
  const [IsError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log("totalPrice", TotalPrice);

  const shopCartItems = useSelector(shopCartItemsRX);

  useEffect(() => {
    dispatch(getCartItemsStarted());
    if (shopCartItems.length === 0) history.push("/");
  }, []);

  useEffect(() => {
    const sumPrice = shopCartItems.reduce(
      (sum, item) => sum + item.sumPrice,
      0
    );
    setTotalPrice(sumPrice);
    setLocalStorage("totalPrice", sumPrice);
  }, [shopCartItems]);
  
  const handleOrderButton = useCallback(
    (e: React.MouseEvent) => {
      isAuth()
        ? shopCartItems.length > 0
          ? history.push("order")
          : setIsError(true)
        : setIsError(true);
    },
    [shopCartItems]
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
