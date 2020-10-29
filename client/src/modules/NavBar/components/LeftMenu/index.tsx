import React, { useCallback, useState } from "react";
import { LeftMenuLayout } from "./layout";

export const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = useCallback(
    (event: React.MouseEvent) => {
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  return <LeftMenuLayout />;
};
