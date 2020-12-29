import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTransactionDetailsStarted } from "../../store/getUserTransactionDetails/actions";
import { userTransactionDetailsRX } from "../../store/getUserTransactionDetails/selectors";
import { UserTransactionDetailsLayout } from "./layout";

type UserDetailProductPageProps = {
  match: { params: { transactionID: string } };
};

export const UserTransactionDetailsPage = memo(
  ({ match }: UserDetailProductPageProps) => {
    const dispatch = useDispatch();

    const userTransactionDetails = useSelector(userTransactionDetailsRX);

    useEffect(() => {
      dispatch(getUserTransactionDetailsStarted(match.params.transactionID));
    }, []);

    return (
      <UserTransactionDetailsLayout
        userTransactionDetails={userTransactionDetails}
      />
    );
  }
);
