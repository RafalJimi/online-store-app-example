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

export const MenCollectionLayout = () => (
  <CollectionContainer>
    <ImgContainer>
      <CollectionSectionTitle>JACKETS</CollectionSectionTitle>
      <img loading="lazy" src={JacketMan} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SUITS</CollectionSectionTitle>
      <img loading="lazy" src={SuitMan} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>COATS</CollectionSectionTitle>
      <img loading="lazy" src={SkirtMan} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SHOES</CollectionSectionTitle>
      <img loading="lazy" src={ShoesMan} alt="" style={{}} />
    </ImgContainer>
  </CollectionContainer>
);
