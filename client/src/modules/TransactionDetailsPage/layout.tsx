import React, { useMemo } from "react";
import { TransactionDetails } from "../../store/getTransactionDetails/reducer";
import {
  TransactionDetailsContainer,
  ContentContainer,
  TransactionDetailsHeader,
  Table,
  TableRow,
  TableHeader,
  Column1,
  Column2,
} from "./layout.styled";

type TransactionDetailLayoutProps = {
  transactionDetails: TransactionDetails;
};

export const TransactionDetailsLayout = ({
  transactionDetails,
}: TransactionDetailLayoutProps) => {
  const products = useMemo(
    () =>
      transactionDetails.products.map((product) => (
        <TableRow key={product.key}>
          <Column1>{product.quantity}</Column1>
          <Column2>{product.product.productName}</Column2>
        </TableRow>
      )),
    [transactionDetails]
  );

  return (
    <TransactionDetailsContainer>
      <ContentContainer>
        <TransactionDetailsHeader>Transaction Details</TransactionDetailsHeader>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>Shipping address</TableHeader>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Email:</i>
              </Column1>
              <Column2>{transactionDetails.shippingAddress.email}</Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Phone:</i>
              </Column1>
              <Column2>
                {transactionDetails.shippingAddress.phoneNumber}
              </Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>City:</i>
              </Column1>
              <Column2>{transactionDetails.shippingAddress.city}</Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Address:</i>
              </Column1>
              <Column2>{transactionDetails.shippingAddress.address}</Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Post code:</i>
              </Column1>
              <Column2>{transactionDetails.shippingAddress.postCode}</Column2>
            </TableRow>
          </tbody>
        </Table>

        <Table>
          <tbody>
            <TableRow>
              <TableHeader>User</TableHeader>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Email:</i>
              </Column1>
              <Column2>{transactionDetails.user.email}</Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Full name:</i>
              </Column1>
              <Column2>{transactionDetails.user.fullName}</Column2>
            </TableRow>
          </tbody>
        </Table>

        <Table>
          <tbody>
            <TableRow>
              <TableHeader>Products</TableHeader>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Quantity</i>:
              </Column1>
              <Column2>
                <i>Product name and size:</i>
              </Column2>
            </TableRow>
            {products}
          </tbody>
        </Table>
      </ContentContainer>
    </TransactionDetailsContainer>
  );
};
