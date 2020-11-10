import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { LogoContainer } from "./logo.styled";

export const Logo = () => {
  const history = useHistory();

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push("/");
  }, []);
  
  return (
    <LogoContainer>
      <h2 onClick={handleOnClick}>Store-Example</h2>
    </LogoContainer>
  );
};
