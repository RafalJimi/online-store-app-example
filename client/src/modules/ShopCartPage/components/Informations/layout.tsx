import React, { useMemo } from "react";
import { Product } from "../../../../store/getProducts/reducer";
import {
  DetailsContainer,
  ContainerTitle,
  SupplyContainer,
  SupplyInformationsContainer,
  ReturnContainer,
  ReturnContainerSection,
} from "./layout.styled";

type InformationsLayoutProps = {
  handleDetailsSection: (e: React.MouseEvent) => void;
  handleSupplySection: (e: React.MouseEvent) => void;
  handleReturnSection: (e: React.MouseEvent) => void;
  DetailsSection: boolean;
  SupplySection: boolean;
  ReturnSection: boolean;
  productDetails: Product;
};

export const InformationsLayout = ({
  handleDetailsSection,
  handleSupplySection,
  handleReturnSection,
  DetailsSection,
  SupplySection,
  ReturnSection,
  productDetails,
}: InformationsLayoutProps) => {
  const productsDetails = useMemo(
    () =>
      productDetails.details.map((productDetail) => (
        <li>{productDetail.text}</li>
      )),
    [productDetails.details]
  );

  return (
    <React.Fragment>
      <DetailsContainer isOpen={DetailsSection}>
        <ContainerTitle onClick={handleDetailsSection}>
          Details
        </ContainerTitle>
        <div className="detailsContent">
          <ul>{productsDetails}</ul>
          <p>Free DHL Pickup Points</p>
        </div>
      </DetailsContainer>
      <SupplyContainer isOpen={SupplySection}>
        <ContainerTitle onClick={handleSupplySection}>
          Supply
        </ContainerTitle>
        <div className="supplyContent">
          <SupplyInformationsContainer>
            <span>DHL pickup points and InPost parcel lockers</span>
            <i>PLN 9.99</i>
            <p>1 - 2 business days</p>
          </SupplyInformationsContainer>
          <SupplyInformationsContainer>
            <span>Standard home</span>
            <i>PLN 9.99</i>
            <p>Next business day (orders placed before 4pm)</p>
          </SupplyInformationsContainer>
        </div>
      </SupplyContainer>
      <ReturnContainer isOpen={ReturnSection}>
        <ContainerTitle onClick={handleReturnSection}>
          Return
        </ContainerTitle>
        <div className="returnContent">
          <ReturnContainerSection>
            <span>RETURN IN STORE</span>
            <p>
              You can return the purchased items at any Store Example store, as
              long as you do so in the country of purchase. You have 30 calendar
              days from the date of receipt of the order shipping confirmation
              to return.
            </p>
          </ReturnContainerSection>
          <ReturnContainerSection>
            <span>FREE PICK-UP FROM THE RESIDENCE</span>
            <p>
              You can request a refund at your place of residence in the MY
              ACCOUNT tab. For an order without registration, you can request a
              refund by clicking on the Tracking / Order Details in the shipping
              email. You have 30 calendar days from the date of receipt of the
              order shipping confirmation to return.
            </p>
          </ReturnContainerSection>
          <ReturnContainerSection>
            <span>RETURN BY PACZKOMAT INPOST</span>
            <p>
              You can return any items to the nearest Inpost parcel locker.
              Check the list of InPost Parcel Service Points when making a
              return (from My Account, in the Returns section). You have 30
              calendar days from the date of receipt of the order shipping
              confirmation to return.
            </p>
          </ReturnContainerSection>
        </div>
      </ReturnContainer>
    </React.Fragment>
  );
};
