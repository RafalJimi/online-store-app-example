import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsStarted } from "../../store/getProductDetails/actions";
import { productDetailsRX } from "../../store/getProductDetails/selectors";
import { toggleImageGallery } from "../../store/imageGallery/actions";
import { DetailProductPageLayout } from "./layout";

type DetailProductPageProps = {
  match: { params: { productId: string } };
};

export const DetailProductPage = ({ match }: DetailProductPageProps) => {
  const dispatch = useDispatch();

  const productDetails = useSelector(productDetailsRX);

  useEffect(() => {
    dispatch(getProductDetailsStarted(match.params.productId));
  }, []);

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    dispatch(toggleImageGallery());
  }, []);

  return (
    <DetailProductPageLayout
      handleOnClick={handleOnClick}
      productDetails={productDetails}
    />
  );
};
