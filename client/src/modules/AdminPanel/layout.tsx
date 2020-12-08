import React from "react";
import {
  PanelLayout,
  AdminPanelContainer,
  AdminPanelTitle,
  AdminPanelSections,
  AdminPanelSectionName,
} from "./layout.styled";
import { EditUserPanel } from "./components/EditUserPanel/index";
import { AddItemPanel } from "./components/AddItemPanel/index";

type AdminPanelLayoutProps = {
  handleOnClick: (show: boolean) => (e: React.MouseEvent) => void;
  ShowEditUser: boolean;
};

export const AdminPanelLayout = ({
  handleOnClick,
  ShowEditUser,
}: AdminPanelLayoutProps) => (
  <PanelLayout>
    <AdminPanelContainer>
      <AdminPanelTitle>Admin Panel</AdminPanelTitle>
      <AdminPanelSections>
        <AdminPanelSectionName onClick={handleOnClick(true)}>
          EDIT USER
        </AdminPanelSectionName>
        <AdminPanelSectionName onClick={handleOnClick(false)}>
          ADD ITEM TO SHOP
        </AdminPanelSectionName>
      </AdminPanelSections>
      {ShowEditUser ? <EditUserPanel /> : <AddItemPanel />}
    </AdminPanelContainer>
  </PanelLayout>
);
