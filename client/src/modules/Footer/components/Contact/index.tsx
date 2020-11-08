import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleContactWindow } from "../../../../store/contactWindow/actions";
import { ContactLayout } from "./layout";

export const Contact = () => {
  const dispatch = useDispatch();

  const handleOpenContactWindow = useCallback((e: React.MouseEvent) => {
    dispatch(toggleContactWindow());
  }, []);

  return <ContactLayout handleOpenContactWindow={handleOpenContactWindow} />;
};
