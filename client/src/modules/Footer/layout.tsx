import React from "react";
import { Newsletter } from "./components/Newsletter/index";
import { Contact } from "./components/Contact/index";
import { FooterContainer, CopyrightContainer } from "./layout.styled";

export const FooterLayout = () => {
  return (
    <FooterContainer>
      <Newsletter />
      <Contact />
      <CopyrightContainer>
        <div>
          <span>&#169;</span>Store example
        </div>
      </CopyrightContainer>
    </FooterContainer>
  );
};
