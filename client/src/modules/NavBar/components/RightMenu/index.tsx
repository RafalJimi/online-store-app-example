import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { toggleLoginMenu } from "../../../../store/loginMenu/actions";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { RightMenuLayout } from "./layout";

export const RightMenu = (props: any) => {
  const [ChangeLayout, setChangeLayout] = useState(false);

  const dispatch = useDispatch();
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);

  useEffect(() => {
    if (window.innerWidth < 1300) {
      setChangeLayout(true);
    } else setChangeLayout(false);
  }, [window.innerWidth]);

  const handleToggleBurgerMenuButton = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleBurgerMenu());
    },
    [burgerMenuIsOpen]
  );

  const handleOpenLoginMenuButton = useCallback((e: React.MouseEvent) => {
    dispatch(toggleLoginMenu());
  }, []);

  return (
    <RightMenuLayout
      ChangeLayout={ChangeLayout}
      burgerMenuIsOpen={burgerMenuIsOpen}
      handleToggleBurgerMenuButton={handleToggleBurgerMenuButton}
      handleOpenLoginMenuButton={handleOpenLoginMenuButton}
    />
  );
};
