import React from "react";
import CoatWoman from "../../../../assets/WomanCollectionImgs/coatwoman.jpg";
import SuitWoman from "../../../../assets/WomanCollectionImgs/suitwoman.jpg";
import SkirtWoman from "../../../../assets/WomanCollectionImgs/skirtwoman.jpg";
import ShoesWoman from "../../../../assets/WomanCollectionImgs/shoeswoman.jpg";
import {
  CollectionContainer,
  ImgContainer,
  CollectionSectionTitle,
} from "./layout.styled";

type WomenCollectionLayoutProps = {
  handleOnClick: (
    gender: string,
    category: string,
    subCategory?: string
  ) => (e: React.MouseEvent) => void;
};

export const WomenCollectionLayout = ({
  handleOnClick,
}: WomenCollectionLayoutProps) => (
  <CollectionContainer>
    <ImgContainer onClick={handleOnClick("woman", "coats")}>
      <CollectionSectionTitle>COATS</CollectionSectionTitle>
      <img loading="lazy" src={CoatWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer onClick={handleOnClick("woman", "suits")}>
      <CollectionSectionTitle>SUITS</CollectionSectionTitle>
      <img loading="lazy" src={SuitWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer onClick={handleOnClick("woman", "skirts")}>
      <CollectionSectionTitle>SKIRTS</CollectionSectionTitle>
      <img loading="lazy" src={SkirtWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer onClick={handleOnClick("woman", "shoes")}>
      <CollectionSectionTitle>SHOES</CollectionSectionTitle>
      <img loading="lazy" src={ShoesWoman} alt="" style={{}} />
    </ImgContainer>
  </CollectionContainer>
);
