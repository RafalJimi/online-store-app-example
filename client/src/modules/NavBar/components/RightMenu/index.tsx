import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../../../../store/burgerMenu/actions";
import { burgerMenuIsOpenRX } from "../../../../store/burgerMenu/selectors";
import { RightMenuLayout } from "./layout";

export const RightMenu = (props: any) => {
  const [ChangeLayout, setChangeLayout] = useState(false);

  const dispatch = useDispatch();
  const BurgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);

  useEffect(() => {
    if (window.innerWidth < 1300) {
      setChangeLayout(true);
    } else setChangeLayout(false);
  }, [window.innerWidth]);

  const handleToggleBurgerMenuButton = useCallback(
    (e: React.MouseEvent) => {
      dispatch(toggleBurgerMenu());
    },
    [BurgerMenuIsOpen]
  );

  return (
    <RightMenuLayout
      ChangeLayout={ChangeLayout}
      BurgerMenuIsOpen={BurgerMenuIsOpen}
      handleToggleBurgerMenuButton={handleToggleBurgerMenuButton}
    />
  );
};
