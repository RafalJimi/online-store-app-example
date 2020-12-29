import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleLoginMenu } from "../../store/loginMenu/actions";
import { toggleContactWindow } from "../../store/contactWindow/actions";
import { toggleBurgerMenu } from "../../store/burgerMenu/actions";
import { burgerMenuIsOpenRX } from "../../store/burgerMenu/selectors";
import { BurgerMenuLayout } from "./layout";

export const BurgerMenu = () => {
  const [Gender, setGender] = useState("woman");
  const [IsOpen, setIsOpen] = useState(false);
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);
  
  const handleOpenContactWindow = useCallback((e: React.MouseEvent) => {
    dispatch(toggleBurgerMenu());
    dispatch(toggleContactWindow());
  }, []);
  
  const handleSetGender = useCallback(
    (gender: string) => (e: React.MouseEvent) => {
      setGender(gender);
    },
    [Gender]
  );

  const handleLoginReference = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleLoginMenu());
      dispatch(toggleBurgerMenu());
    },
    [IsOpen]
  );

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(!IsOpen);
    },
    [IsOpen]
  );

  const handleRedirect = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
      dispatch(toggleBurgerMenu());
    },
    [IsOpen]
  );


  return (
    <BurgerMenuLayout
      burgerMenuIsOpen={burgerMenuIsOpen}
      handleSetGender={handleSetGender}
      gender={Gender}
      handleLoginReference={handleLoginReference}
      isOpen={IsOpen}
      handleOnClick={handleOnClick}
      handleRedirect={handleRedirect}
      handleOpenContactWindow={handleOpenContactWindow}
    />
  );
};
