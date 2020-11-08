import React, { useState, useCallback } from "react";
import { CollectionMenuLayout } from "./layout";

export const CollectionMenu = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(!IsOpen);
    },
    [IsOpen]
  );

  return <CollectionMenuLayout isOpen={IsOpen} handleOnClick={handleOnClick} />;
};
