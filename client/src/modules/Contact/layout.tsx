import React from "react";
import {
  ContactContainer,
  CloseContactWindow,
  ContactWindow,
  CloseContactWindowButton,
  Title,
  TextContainer,
  DetailsContainer,
} from "./layout.styled";

type RegisterMenuLayoutProps = {
  isOpen: boolean;
  handleCloseContactWindow: (e: React.MouseEvent) => void;
};

export const ContactWindowLayout = ({
  isOpen,
  handleCloseContactWindow,
}: RegisterMenuLayoutProps) => (
  <ContactContainer prop={isOpen}>
    <CloseContactWindow className="red" onClick={handleCloseContactWindow} />
    <ContactWindow>
      <CloseContactWindowButton onClick={handleCloseContactWindow}>
        <i className="fas fa-times" />
      </CloseContactWindowButton>
      <Title>Customer Service</Title>
      <TextContainer>
        Our Customer Service Department is at your complete disposal to answer
        any questions you may have about Store Example.
      </TextContainer>
      <DetailsContainer>
        Please call 00 000 00 00 000 <br /> From Monday to Friday, from 10 - 18H
      </DetailsContainer>
    </ContactWindow>
  </ContactContainer>
);
