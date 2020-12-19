import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetailsStarted } from "../../store/getTransactionDetails/actions";
import { transactionDetailsRX } from "../../store/getTransactionDetails/selectors";
import { TransactionDetailsLayout } from "./layout";

type DetailProductPageProps = {
  match: { params: { transactionID: string } };
};

export const TransactionDetailsPage = memo(
  ({ match }: DetailProductPageProps) => {
    const dispatch = useDispatch();

    const transactionDetails = useSelector(transactionDetailsRX);

    useEffect(() => {
      dispatch(getTransactionDetailsStarted(match.params.transactionID));
    }, []);

    return <TransactionDetailsLayout transactionDetails={transactionDetails} />;
  }
);
