import React, { useCallback, useState } from "react";
import { OrderPageLayout } from "./layout";

export const OrderPage = () => {
  const [ShowEditUser, setShowEditUser] = useState(true);

  const handleOnClick = useCallback(
    (show: boolean) => (e: React.MouseEvent) => {
      setShowEditUser(show);
    },
    [ShowEditUser]
  );

  return <OrderPageLayout />;
};
