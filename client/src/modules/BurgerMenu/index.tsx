import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContactWindow } from "../../store/contactWindow/actions";
import { toggleBurgerMenu } from "../../store/burgerMenu/actions";
import { burgerMenuIsOpenRX } from "../../store/burgerMenu/selectors";
import { BurgerMenuLayout } from "./layout";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);
  
  const handleOpenContactWindow = useCallback((e: React.MouseEvent) => {
    dispatch(toggleBurgerMenu());
    dispatch(toggleContactWindow());
  }, []);

  return (
    <BurgerMenuLayout
      isOpen={burgerMenuIsOpen}
      handleOpenContactWindow={handleOpenContactWindow}
    />
  );
};
