import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenCollectionLayout } from "./layout";

export const MenCollection = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (gender: string, category: string, subCategory?: string) => (
      e: React.MouseEvent
    ) => {
      history.push(
        `/products?gender=${gender}&category=${category}&subCategory=${subCategory}`
      );
    },
    []
  );

  return <MenCollectionLayout handleOnClick={handleOnClick} />;
};
