import React from "react";
import { AddItemPanelContainer } from "./layout.styled";
import { FileUpload } from "../../../../utils/FileUpload/index";

export const AddItemPanelLayout = () => (
  <AddItemPanelContainer>
    <FileUpload />
  </AddItemPanelContainer>
);
