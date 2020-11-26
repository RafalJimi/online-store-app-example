import React, { memo, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsStarted,
  clearProductsArray,
} from "../../store/getProducts/actions";
import { productsListRX, loadMoreProductsRX } from "../../store/getProducts/selectors";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { ProductsPageLayout } from "./layout";

type GetProductsVariables = {
  skip: number;
  limit: number;
  gender: string | string[] | null;
  category: string | string[] | null;
  subCategory: string | string[] | null;
};

export const ProductsPage = memo(() => {
  const [GetProductsVariables,setGetProductsVariables] = useState<GetProductsVariables>({
    skip: 0,
    limit: 2,
    gender: "",
    category: "",
    subCategory: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const productsList = useSelector(productsListRX);
  const loadMore = useSelector(loadMoreProductsRX);

  useEffect(() => {
    const getProductQueries = queryString.parse(history.location.search)
    setGetProductsVariables({
      ...GetProductsVariables,
      gender: getProductQueries.gender,
      category: getProductQueries.category,
      subCategory: getProductQueries.subCategory,
    });
  }, []);

  useEffect(() => {
    const getProductQueries = queryString.parse(history.location.search);
      dispatch(clearProductsArray());
      setGetProductsVariables({
        ...GetProductsVariables,
        skip: 0,
        gender: getProductQueries.gender,
        category: getProductQueries.category,
        subCategory: getProductQueries.subCategory,
      });
  }, [history.location.search]);

  useEffect(() => {
    if (
      (GetProductsVariables.gender !== "")
    )
      dispatch(getProductsStarted(GetProductsVariables));
  }, [
    GetProductsVariables.skip,
    GetProductsVariables.gender,
    GetProductsVariables.category,
    GetProductsVariables.subCategory,
  ]);

  const handleNext = useCallback(() => {
    setGetProductsVariables({
      ...GetProductsVariables,
      skip: GetProductsVariables.skip + 2,
    });
  }, [GetProductsVariables.skip]);

  return (
    <ProductsPageLayout
      products={productsList}
      handleNext={handleNext}
      loadMore={loadMore}
    />
  );
});
