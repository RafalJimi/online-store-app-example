import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import JacketMan from "../../../../assets/ManCollectionImgs/jacketman.jpg";
import SuitMan from "../../../../assets/ManCollectionImgs/suitman.jpg";
import SkirtMan from "../../../../assets/ManCollectionImgs/coatman.jpg";
import ShoesMan from "../../../../assets/ManCollectionImgs/shoesman.jpg";
import {
  CollectionContainer,
  ImgContainer,
  CollectionSectionTitle,
} from "./layout.styled";

type MenCollectionLayoutProps = {
  handleOnClick: (
    gender: string,
    category: string,
    subCategory?: string
  ) => (e: React.MouseEvent) => void;
};

export const MenCollectionLayout = ({
  handleOnClick,
}: MenCollectionLayoutProps) => (
  <CollectionContainer>
    <LazyLoadComponent delayTime={0} threshold={0} visibleByDefault={false}>
      <ImgContainer onClick={handleOnClick("man", "jackets")}>
        <CollectionSectionTitle>JACKETS</CollectionSectionTitle>
        <img loading="lazy" src={JacketMan} alt="" style={{}} />
      </ImgContainer>
    </LazyLoadComponent>
    <LazyLoadComponent delayTime={0} threshold={0} visibleByDefault={false}>
      <ImgContainer onClick={handleOnClick("man", "suits")}>
        <CollectionSectionTitle>SUITS</CollectionSectionTitle>
        <img loading="lazy" src={SuitMan} alt="" style={{}} />
      </ImgContainer>
    </LazyLoadComponent>
    <LazyLoadComponent delayTime={0} threshold={0} visibleByDefault={false}>
      <ImgContainer onClick={handleOnClick("man", "coats")}>
        <CollectionSectionTitle>COATS</CollectionSectionTitle>
        <img loading="lazy" src={SkirtMan} alt="" style={{}} />
      </ImgContainer>
    </LazyLoadComponent>
    <LazyLoadComponent delayTime={0} threshold={0} visibleByDefault={false}>
      <ImgContainer onClick={handleOnClick("man", "shoes")}>
        <CollectionSectionTitle>SHOES</CollectionSectionTitle>
        <img loading="lazy" src={ShoesMan} alt="" style={{}} />
      </ImgContainer>
    </LazyLoadComponent>
  </CollectionContainer>
);
