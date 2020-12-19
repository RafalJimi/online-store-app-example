import React, { useMemo } from "react";
import {
  TransactionHistoryContainer,
  ContentContainer,
  TransactionHistoryHeader,
  TransactionsTable,
  TableRow,
  DateHeader,
  IdHeader,
  EmailHeader,
  PriceHeader,
  DetailsHeader,
  Date,
  Id,
  Email,
  Price,
  DetailsButton,
} from "./layout.styled";
import { TransactionDetails } from "../../store/getTransactionDetails/reducer";

type TransactionHistoryLayoutProps = {
  transactionHistory: TransactionDetails[];
  handleOnClick: (id: string) => (e: React.MouseEvent) => void;
};

export const TransactionHistoryLayout = ({
  transactionHistory,
  handleOnClick,
}: TransactionHistoryLayoutProps) => {
  const transactionsList = useMemo(
    () =>
      transactionHistory.map((transaction) => (
        <TableRow key={transaction._id}>
          <Date>{transaction.createdAt.split("T")[0]}</Date>
          <Id>{transaction._id}</Id>
          <Email>{transaction.user.email}</Email>
          <Price>{transaction.price}</Price>
          <DetailsButton onClick={handleOnClick(transaction._id)}>
            More...
          </DetailsButton>
        </TableRow>
      )),
    [transactionHistory]
  );

  return (
    <TransactionHistoryContainer>
      <ContentContainer>
        <TransactionHistoryHeader>Transaction history</TransactionHistoryHeader>
        <TransactionsTable>
          <tbody>
            <TableRow>
              <DateHeader>Date</DateHeader>
              <IdHeader>Transaction ID</IdHeader>
              <EmailHeader>User email</EmailHeader>
              <PriceHeader>Total price</PriceHeader>
              <DetailsHeader>Details</DetailsHeader>
            </TableRow>
            {transactionHistory && transactionsList}
          </tbody>
        </TransactionsTable>
      </ContentContainer>
    </TransactionHistoryContainer>
  );
};
