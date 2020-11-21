import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { WomenCollectionLayout } from "./layout";

export const WomenCollection = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (gender: string, category: string, subCategory?: string) => (
      e: React.MouseEvent
    ) => {
      history.push(`/products?gender=${gender}&category=${category}`);
    },
    []
  );

  return <WomenCollectionLayout handleOnClick={handleOnClick} />;
};
