import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleSearchMenu } from "../../../../store/searchMenu/actions";
import { ProductContainerLayout } from "./layout";

type ProductContainerProps = {
  _id: string;
  image: string;
  productName: string;
  price: number;
};

export const ProductContainer = ({
  _id,
  image,
  productName,
  price,
}: ProductContainerProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      history.push(`/product/details/id/${_id}`);
      dispatch(toggleSearchMenu());
    },
    [_id]
  );

  return (
    <ProductContainerLayout
      handleOnClick={handleOnClick}
      image={image}
      productName={productName}
      price={price}
    />
  );
};
