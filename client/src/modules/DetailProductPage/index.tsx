import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCartStarted } from "../../store/shopCart/actions";
import { getProductDetailsStarted } from "../../store/getProductDetails/actions";
import { productDetailsRX } from "../../store/getProductDetails/selectors";
import { toggleImageGallery } from "../../store/imageGallery/actions";
import { DetailProductPageLayout } from "./layout";
import { toast } from "react-toastify";

type DetailProductPageProps = {
  match: { params: { productId: string } };
};

export const DetailProductPage = ({ match }: DetailProductPageProps) => {
  const [Size, setSite] = useState("");
  
  const dispatch = useDispatch();
  const history = useHistory();

  const productDetails = useSelector(productDetailsRX);

  useEffect(() => {
    dispatch(getProductDetailsStarted(match.params.productId));
  }, [history.location.pathname]);

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    dispatch(toggleImageGallery());
  }, []);
  
  const handleSetSize = useCallback(
    (size: string) => (e: React.MouseEvent) => {
      setSite(size);
    },
    [Size]
  );

  const handleAddToCart = useCallback(
    (e: React.MouseEvent) => {
      if (!Size) toast.dark("You have select product size");
      else if (Size) {
        const itemData = {
          quantity: 1,
          size: Size,
          product: productDetails,
          key: Date.now(),
          sumPrice: productDetails.price,
        };
        dispatch(addToCartStarted(itemData));
      }
    },
    [Size]
  );

  return (
    <DetailProductPageLayout
      handleOnClick={handleOnClick}
      productDetails={productDetails}
      handleSetSize={handleSetSize}
      handleAddToCart={handleAddToCart}
      size={Size}
    />
  );
};
