import React, { memo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userTransactionHistoryRX } from "../../store/getUserTransactionHistory/selectors";
import { getUserTransactionHistoryStarted } from "../../store/getUserTransactionHistory/actions";
import { UserTransactionHistoryLayout } from "./layout";

export const UserTransactionHistoryPage = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const transactionHistory = useSelector(userTransactionHistoryRX);

  const handleOnClick = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      history.push(`transaction/${id}`);
    },
    []
  );

  useEffect(() => {
    dispatch(getUserTransactionHistoryStarted());
  }, []);

  return (
    <UserTransactionHistoryLayout
      transactionHistory={transactionHistory}
      handleOnClick={handleOnClick}
    />
  );
});
