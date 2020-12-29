import React, { useMemo } from "react";
import {
  UserTransactionHistoryContainer,
  ContentContainer,
  Header,
  TransactionsTable,
  TableRow,
  DateHeader,
  CityHeader,
  PostCodeHeader,
  PriceHeader,
  DetailsHeader,
  Date,
  City,
  PostCode,
  Price,
  DetailsButton,
} from "./layout.styled";

type UserTransactionHistoryLayoutProps = {
  transactionHistory: any;
  handleOnClick: (id: string) => (e: React.MouseEvent) => void;
};

export const UserTransactionHistoryLayout = ({
  transactionHistory,
  handleOnClick,
}: UserTransactionHistoryLayoutProps) => {
  const transactionsList = useMemo(
    () =>
      transactionHistory.map((transaction: any) => (
        <TableRow key={transaction._id}>
          <Date>{transaction.createdAt.split("T")[0]}</Date>
          <City>{transaction.shippingAddress.city}</City>
          <PostCode>{transaction.shippingAddress.postCode}</PostCode>
          <Price>{transaction.price}</Price>
          <DetailsButton onClick={handleOnClick(transaction._id)}>
            More...
          </DetailsButton>
        </TableRow>
      )),
    [transactionHistory]
  );

  return (
    <UserTransactionHistoryContainer>
      <ContentContainer>
        <Header>
          {transactionHistory.length !== 0
            ? "Transaction history"
            : "Your transaction history is empty"}
        </Header>
        {transactionHistory.length !== 0 && (
          <React.Fragment>
            <TransactionsTable>
              <tbody>
                <TableRow>
                  <DateHeader>Total price</DateHeader>
                  <CityHeader>City</CityHeader>
                  <PostCodeHeader>Post code</PostCodeHeader>
                  <PriceHeader>Total price</PriceHeader>
                  <DetailsHeader>Details</DetailsHeader>
                </TableRow>
                {transactionHistory && transactionsList}
              </tbody>
            </TransactionsTable>
          </React.Fragment>
        )}
      </ContentContainer>
    </UserTransactionHistoryContainer>
  );
};
