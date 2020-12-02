import React from "react";
import { Newsletter } from "./components/Newsletter/index";
import { Contact } from "./components/Contact/index";
import { FooterContainer, CopyrightContainer } from "./layout.styled";
import { Product } from "../../store/getProducts/reducer";

type FooterLayoutProps = {
  loadMoreProducts: boolean;
  currentPage: string;
  productsList: Product[];
};

export const FooterLayout = ({
  currentPage,
  loadMoreProducts,
  productsList,
}: FooterLayoutProps) => {
  return (
    <React.Fragment>
      {((loadMoreProducts && currentPage && productsList.length > 2) || currentPage === "shop-cart") ? null : (
        <FooterContainer>
          <Newsletter />
          <Contact />
          <CopyrightContainer>
            <div>
              <span>&#169;</span>Store example
            </div>
          </CopyrightContainer>
        </FooterContainer>
      )}
    </React.Fragment>
  );
};
