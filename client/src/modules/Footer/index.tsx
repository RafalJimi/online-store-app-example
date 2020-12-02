import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loadMoreProductsRX,
  productsListRX,
} from "../../store/getProducts/selectors";
import { FooterLayout } from "./layout";

export const Footer = () => {
  const [CurrentPage, setCurrentPage] = useState("main");

  const history = useHistory();

  const loadMoreProducts = useSelector(loadMoreProductsRX);
  const productsList = useSelector(productsListRX);

  useEffect(() => {
    const page = history.location.pathname.split("/")[1];
    setCurrentPage(page);
  }, [history.location.pathname]);

  return (
    <FooterLayout
      currentPage={CurrentPage}
      loadMoreProducts={loadMoreProducts}
      productsList={productsList}
    />
  );
};
