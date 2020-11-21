import React from "react";
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
    <ImgContainer onClick={handleOnClick("man", "jackets")}>
      <CollectionSectionTitle>JACKETS</CollectionSectionTitle>
      <img loading="lazy" src={JacketMan} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer onClick={handleOnClick("man", "suits")}>
      <CollectionSectionTitle>SUITS</CollectionSectionTitle>
      <img loading="lazy" src={SuitMan} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer onClick={handleOnClick("man", "coats")}>
      <CollectionSectionTitle>COATS</CollectionSectionTitle>
      <img loading="lazy" src={SkirtMan} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer onClick={handleOnClick("man", "shoes")}>
      <CollectionSectionTitle>
        SHOES
      </CollectionSectionTitle>
      <img loading="lazy" src={ShoesMan} alt="" style={{}} />
    </ImgContainer>
  </CollectionContainer>
);
