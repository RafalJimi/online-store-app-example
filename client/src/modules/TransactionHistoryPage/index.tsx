import React, { memo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTransactionHistoryStarted } from "../../store/getTransactionHistory/actions";
import { transactionHistoryRX } from "../../store/getTransactionHistory/selectors";
import { TransactionHistoryLayout } from "./layout";

export const TransactionHistoryPage = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const transactionHistory = useSelector(transactionHistoryRX);

  useEffect(() => {
    dispatch(getTransactionHistoryStarted());
  }, []);

  const handleOnClick = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      history.push(`transactionDetails/${id}`);
    },
    []
  );

  return (
    <TransactionHistoryLayout
      transactionHistory={transactionHistory}
      handleOnClick={handleOnClick}
    />
  );
});
