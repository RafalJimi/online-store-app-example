import React, { useMemo } from "react";
import { ProductPageLayoutContainer, ProductsContainer } from "./layout.styled";
import { SearchPanel } from "./components/SearchPanel/index";
import { Product } from "./components/Product/index";
import * as ProductsState from "../../store/getProducts/reducer";
import InfiniteScroll from "react-infinite-scroll-component";

type ProductPageLayout = {
  products: ProductsState.Product[];
  handleNext: () => void;
  loadMore: boolean;
};

export const ProductsPageLayout = ({
  products,
  handleNext,
  loadMore,
}: ProductPageLayout) => {
  
  const productsList = useMemo(
    () => products.map((product) => <Product product={product} />),
    [products]
  );
  
  return (
    <ProductPageLayoutContainer>
      <SearchPanel />
      <ProductsContainer productsListLength={products.length}>
        <InfiniteScroll
          dataLength={products.length}
          next={handleNext}
          hasMore={loadMore}
          loader
        >
          {products && productsList}
        </InfiniteScroll>
      </ProductsContainer>
    </ProductPageLayoutContainer>
  );
};
