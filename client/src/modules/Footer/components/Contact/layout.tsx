import React from "react";
import { ContactContainer } from "./layout.styled";

type ContactLayoutProps = {
  handleOpenContactWindow: (e: React.MouseEvent) => void;
};

export const ContactLayout = ({
  handleOpenContactWindow,
}: ContactLayoutProps) => {
  return (
    <ContactContainer>
      <div onClick={handleOpenContactWindow}>Contact</div>
    </ContactContainer>
  );
};
