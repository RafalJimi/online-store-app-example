import React from "react";
import { LoadingContainer } from "./layout.styled";

export const Loading = () => (
  <LoadingContainer>
    <i className="fas fa-circle-notch fa-spin 1x w-6  -ml-2"></i>
    <span>Loading ...</span>
  </LoadingContainer>
);
