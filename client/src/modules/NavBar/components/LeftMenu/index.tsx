import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { LeftMenuLayout } from "./layout";

export const LeftMenu = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (gender: string, category?: string, subCategory?: string) => (
      e: React.MouseEvent
    ) => {
      history.push(
        `/products?gender=${gender}&category=${category}&subCategory=${subCategory}`
      );
    },
    []
  );

  return <LeftMenuLayout handleOnClick={handleOnClick} />;
};
