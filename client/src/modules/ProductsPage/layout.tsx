import React, { useMemo } from "react";
import { ProductsPageContainer, ProductsContainer } from "./layout.styled";
import { SearchPanel } from "./components/SearchPanel/index";
import { Product } from "./components/Product/index";
import * as ProductsState from "../../store/getProducts/reducer";
import InfiniteScroll from "react-infinite-scroll-component";
import { LazyLoadComponent } from "react-lazy-load-image-component";

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
    () =>
      products.map((product) => (
        <LazyLoadComponent delayTime={0} threshold={0} visibleByDefault={false}>
          <Product product={product} />{" "}
        </LazyLoadComponent>
      )),
    [products]
  );

  return (
    <ProductsPageContainer>
      <SearchPanel />
      <ProductsContainer>
        <InfiniteScroll
          dataLength={products.length}
          next={handleNext}
          hasMore={loadMore}
          loader
        >
          {products && productsList}
        </InfiniteScroll>
      </ProductsContainer>
    </ProductsPageContainer>
  );
};
