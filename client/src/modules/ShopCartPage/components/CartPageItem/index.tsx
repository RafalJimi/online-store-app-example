import React, { ChangeEvent, useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ShopCartItem } from "../../../../store/shopCart/reducer";
import { removeCartItemStarted } from "../../../../store/shopCart/actions";
import { setQuantityStarted } from "../../../../store/shopCart/actions";
import { CartPageItemLayout } from "./layout";

type CartPageItemProps = {
  cartItem: ShopCartItem;
};

export const CartPageItem = ({ cartItem }: CartPageItemProps) => {
  const [Quantity, setQuantity] = useState(1);
  const [SumPrice, setSumPrice] = useState(0);

  console.log(SumPrice);

  const dispatch = useDispatch();

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
    dispatch(setQuantityStarted(cartItem.key, parseInt(e.target.value)));
  };

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    dispatch(removeCartItemStarted(cartItem));
  }, []);

  useEffect(() => {
    const totalPrice = cartItem.product.price * Quantity;
    setSumPrice(totalPrice);
  }, [Quantity]);

  return (
    <CartPageItemLayout
      imageUrl={cartItem.product.images[0].path}
      name={cartItem.product.productName}
      size={cartItem.size}
      sumPrice={SumPrice}
      handleOnSelect={handleOnSelect}
      handleOnClick={handleOnClick}
    />
  );
};
