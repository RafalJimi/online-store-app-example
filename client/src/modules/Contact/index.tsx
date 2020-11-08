import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleContactWindow } from "../../store/contactWindow/actions";
import { contactWindowIsOpenRX } from "../../store/contactWindow/selectors";
import { ContactWindowLayout } from "./layout";

export const ContactWindow = () => {
  const dispatch = useDispatch();
  const contactWindowIsOpen = useSelector(contactWindowIsOpenRX);

  const handleCloseContactWindow = useCallback((e: React.MouseEvent) => {
    dispatch(toggleContactWindow());
  }, []);

  return (
    <ContactWindowLayout
      isOpen={contactWindowIsOpen}
      handleCloseContactWindow={handleCloseContactWindow}
    />
  );
};
