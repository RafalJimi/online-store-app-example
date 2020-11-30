import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { RightMenuLayout } from "./layout";

export const RightMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);

  const handleToggleBurgerMenuButton = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleBurgerMenu());
    },
    [burgerMenuIsOpen]
  );
  
  const handleOpenLoginMenuButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleLoginMenu());
  }, []);

  const handleRedirect = useCallback((url: string) => (e: React.MouseEvent) => {
    history.push(url)
  }, [])
  
  return (
    <RightMenuLayout
      burgerMenuIsOpen={burgerMenuIsOpen}
      handleToggleBurgerMenuButton={handleToggleBurgerMenuButton}
      handleOpenLoginMenuButton={handleOpenLoginMenuButton}
      handleRedirect={handleRedirect}
    />
  );
};
