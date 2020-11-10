import React, { useState, useCallback } from "react";
import { NewsletterLayout } from "./layout";

export const Newsletter = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(!IsOpen);
    },
    [IsOpen]
  );

  return <NewsletterLayout isOpen={IsOpen} handleOnClick={handleOnClick} />;
};
