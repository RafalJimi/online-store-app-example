import React from "react";
import {
  ActivatePageLayoutContainer,
  ActivatePageContent,
  ActivatePageForm,
  ImageContainer,
  ActivatePageButton,
} from "./layout.styled";
import ActivatePageImg from "../../assets/ActivatePage/ActivationPagePhoto.jpg";

export const ActivatePageLayout = () => (
  <ActivatePageLayoutContainer>
    <ActivatePageContent>
      <ActivatePageForm>
        <h4>Welcome Test</h4>
        <ActivatePageButton type="submit">
          Activate your Account
        </ActivatePageButton>
      </ActivatePageForm>
      <ImageContainer>
        <img src={ActivatePageImg} alt="" />
      </ImageContainer>
    </ActivatePageContent>
  </ActivatePageLayoutContainer>
);
