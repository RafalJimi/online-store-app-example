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
      <img src={JacketWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SUITS</CollectionSectionTitle>
      <img src={SuitWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SKIRTS</CollectionSectionTitle>
      <img src={SkirtWoman} alt="" style={{}} />
    </ImgContainer>
    <ImgContainer>
      <CollectionSectionTitle>SHOES</CollectionSectionTitle>
      <img src={ShoesWoman} alt="" style={{}} />
    </ImgContainer>
  </CollectionContainer>
);
