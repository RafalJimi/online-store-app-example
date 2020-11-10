import React from "react";
import JacketWoman from "../../../../assets/WomanCollectionImgs/jacketwoman.jpg";
import SuitWoman from "../../../../assets/WomanCollectionImgs/suitwoman.jpg";
import SkirtWoman from "../../../../assets/WomanCollectionImgs/skirtwoman.jpg";
import ShoesWoman from "../../../../assets/WomanCollectionImgs/shoeswoman.jpg";
import {
  CollectionContainer,
  ImgContainer,
  CollectionSectionTitle,
} from "./layout.styled";

export const WomenCollectionLayout = () => (
  <CollectionContainer>
    <ImgContainer>
      <CollectionSectionTitle>JACKETS</CollectionSectionTitle>
      <img loading="lazy" src={JacketWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SUITS</CollectionSectionTitle>
      <img loading="lazy" src={SuitWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SKIRTS</CollectionSectionTitle>
      <img loading="lazy" src={SkirtWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SHOES</CollectionSectionTitle>
      <img loading="lazy" src={ShoesWoman} alt="" style={{}} />
    </ImgContainer>
  </CollectionContainer>
);
