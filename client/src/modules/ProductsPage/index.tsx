import React, { memo, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsStarted,
  clearProductsArray,
} from "../../store/getProducts/actions";
import { productsListRX, loadMoreProductsRX } from "../../store/getProducts/selectors";
import { useHistory } from "react-router-dom";
import { ProductsPageLayout } from "./layout";

export const ProductsPage = memo(() => {
  const [GetProducts, setGetProducts] = useState({
    skip: 0,
    limit: 2,
    filters: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  
  console.log(GetProducts.filters, GetProducts.skip)

  const productsList = useSelector(productsListRX);
  const loadMore = useSelector(loadMoreProductsRX);

  useEffect(() => {
    const searchProps = history.location.search;
    setGetProducts({ ...GetProducts, filters: searchProps });
  }, []);

  useEffect(() => {
    const searchProps = history.location.search;
    setGetProducts({ ...GetProducts, filters: searchProps, skip: 0 });
    dispatch(clearProductsArray());
  }, [history.location.search]);

  useEffect(() => {
    dispatch(getProductsStarted(GetProducts));
  }, [GetProducts.filters, GetProducts.skip]);
  
  const handleNext = useCallback(
    () => {
      setGetProducts({ ...GetProducts, skip: GetProducts.skip + 2 });
    },
    [GetProducts.skip],
  )

  return (
    <ProductsPageLayout
      products={productsList}
      handleNext={handleNext}
      loadMore={loadMore}
    />
  );
});
