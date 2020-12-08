import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCartItemsStarted } from "../../store/shopCart/actions";
import { shopCartItemsRX } from "../../store/shopCart/selectors";
import { ShopCartPageLayout } from "./layout";

export const ShopCartPage = memo(() => {
  const [TotalPrice, setTotalPrice] = useState(0);
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
  }, [shopCartItems]);

  return (
    <ShopCartPageLayout cartItems={shopCartItems} totalPrice={TotalPrice} />
  );
});
