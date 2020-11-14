import React from "react";
import {
  AdminPanelLayoutContainer,
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
  <AdminPanelLayoutContainer>
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
  </AdminPanelLayoutContainer>
);
