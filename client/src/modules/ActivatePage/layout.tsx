import React from "react";
import {
  ActivatePageContainer,
  ActivatePageContent,
  ActivatePageForm,
  ImageContainer,
  ActivatePageButton,
} from "./layout.styled";
import ActivatePageImg from "../../assets/ActivatePage/ActivationPagePhoto.jpg";

type ActivePageLayoutProps = {
  firstName: string;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const ActivatePageLayout = ({
  firstName,
  handleOnSubmit,
}: ActivePageLayoutProps) => (
  <ActivatePageContainer>
    <ActivatePageContent>
      <ActivatePageForm onSubmit={handleOnSubmit}>
        <h4>Welcome {firstName}</h4>
        <ActivatePageButton type="submit">
          Activate your Account
        </ActivatePageButton>
      </ActivatePageForm>
      <ImageContainer>
        <img loading="lazy" src={ActivatePageImg} alt="" />
      </ImageContainer>
    </ActivatePageContent>
  </ActivatePageContainer>
);
