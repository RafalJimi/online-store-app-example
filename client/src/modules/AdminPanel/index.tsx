import React, { useCallback, useState } from "react";
import { AdminPanelLayout } from "./layout";

export const AdminPanel = () => {
  const [ShowEditUser, setShowEditUser] = useState(true);

  const handleOnClick = useCallback(
    (show: boolean) => (e: React.MouseEvent) => {
      setShowEditUser(show);
    },
    [ShowEditUser]
  );

  return (
    <AdminPanelLayout
      handleOnClick={handleOnClick}
      ShowEditUser={ShowEditUser}
    />
  );
};
