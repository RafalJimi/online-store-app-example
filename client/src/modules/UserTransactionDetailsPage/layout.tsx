import React, { useMemo } from "react";
import { TransactionDetails } from "../../store/getTransactionDetails/reducer";
import {
  UserTransactionDetailsContainer,
  ContentContainer,
  TransactionDetailsHeader,
  Table,
  TableRow,
  TableHeader,
  Column1,
  Column2,
} from "./layout.styled";

type UserTransactionDetailLayoutProps = {
  userTransactionDetails: TransactionDetails;
};

export const UserTransactionDetailsLayout = ({
  userTransactionDetails,
}: UserTransactionDetailLayoutProps) => {
  const products = useMemo(
    () =>
      userTransactionDetails.products.map((product) => (
        <TableRow key={product.key}>
          <Column1>{product.quantity}</Column1>
          <Column2>
            {product.product.productName} <i>{product.size}</i>
          </Column2>
        </TableRow>
      )),
    [userTransactionDetails]
  );

  return (
    <UserTransactionDetailsContainer>
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
              <Column2>{userTransactionDetails.shippingAddress.email}</Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Phone:</i>
              </Column1>
              <Column2>
                {userTransactionDetails.shippingAddress.phoneNumber}
              </Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>City:</i>
              </Column1>
              <Column2>{userTransactionDetails.shippingAddress.city}</Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Address:</i>
              </Column1>
              <Column2>
                {userTransactionDetails.shippingAddress.address}
              </Column2>
            </TableRow>
            <TableRow>
              <Column1>
                <i>Post code:</i>
              </Column1>
              <Column2>
                {userTransactionDetails.shippingAddress.postCode}
              </Column2>
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
    </UserTransactionDetailsContainer>
  );
};
