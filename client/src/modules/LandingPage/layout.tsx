import React from "react";
import { LandingPageLayoutContainer, CollectionTitle } from "./layout.styled";
import { WomenCollection } from "./components/WomenCollection/index";
import { MenCollection } from "./components/MenCollection/index";

export const LandingPageLayout = () => (
  <LandingPageLayoutContainer>
    <CollectionTitle>Collection for Women</CollectionTitle>
    <WomenCollection />
    <CollectionTitle>Collection for Men</CollectionTitle>
    <MenCollection />
  </LandingPageLayoutContainer>
);
