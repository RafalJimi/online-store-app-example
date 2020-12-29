import React from "react";
import {
  PanelLayout,
  UserPanelContainer,
  UserPanelTitle,
} from "./layout.styled";
import { InformationsForm } from "./components/EditInformations/index";

export const UserPanelLayout = () => (
  <PanelLayout>
    <UserPanelContainer>
      <UserPanelTitle>User Panel</UserPanelTitle>
      <InformationsForm />
    </UserPanelContainer>
  </PanelLayout>
);
