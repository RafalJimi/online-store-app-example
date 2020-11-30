import React from "react";
import { LandingPageContainer, CollectionTitle } from "./layout.styled";
import { WomenCollection } from "./components/WomenCollection/index";
import { MenCollection } from "./components/MenCollection/index";

export const LandingPageLayout = () => (
  <LandingPageContainer>
    <CollectionTitle>Collection for Women</CollectionTitle>
    <WomenCollection />
    <CollectionTitle>Collection for Men</CollectionTitle>
    <MenCollection />
  </LandingPageContainer>
);
