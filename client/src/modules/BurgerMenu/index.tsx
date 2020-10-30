import React from "react";
import { useSelector } from "react-redux";
import { burgerMenuIsOpenRX } from "../../store/burgerMenu/selectors";
import { BurgerMenuLayout } from "./layout";

export const BurgerMenu = () => {
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);

  return <BurgerMenuLayout isOpen={burgerMenuIsOpen} />;
};
