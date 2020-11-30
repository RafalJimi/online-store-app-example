import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { productDetailsRX } from "../../../../store/getProductDetails/selectors";
import { InformationsLayout } from "./layout";

export const Informations = () => {
  const [DetailsSection, setDetailsSection] = useState(true);
  const [SupplySection, setSupplySection] = useState(false);
  const [ReturnSection, setReturnSection] = useState(false);

  const productDetails = useSelector(productDetailsRX);

  const handleDetailsSection = useCallback(
    (e: React.MouseEvent) => {
      setDetailsSection(!DetailsSection);
      setSupplySection(false);
      setReturnSection(false);
    },
    [DetailsSection]
  );

  const handleSupplySection = useCallback(
    (e: React.MouseEvent) => {
      setDetailsSection(false);
      setSupplySection(!SupplySection);
      setReturnSection(false);
    },
    [SupplySection]
  );

  const handleReturnSection = useCallback(
    (e: React.MouseEvent) => {
      setDetailsSection(false);
      setSupplySection(false);
      setReturnSection(!ReturnSection);
    },
    [ReturnSection]
  );

  return (
    <InformationsLayout
      handleDetailsSection={handleDetailsSection}
      handleSupplySection={handleSupplySection}
      handleReturnSection={handleReturnSection}
      DetailsSection={DetailsSection}
      SupplySection={SupplySection}
      ReturnSection={ReturnSection}
      productDetails={productDetails}
    />
  );
};
