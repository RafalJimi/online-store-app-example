import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 800px;
  background-color: #00000050;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  :hover img {
    height: 110%;
    filter: grayscale(0%);
    cursor: pointer;
  }

  :hover div {
    font-size: 2.3em;
  }

  img {
    height: 100%;
    filter: grayscale(100%);
    transition: height 0.5s, filter 0.5s;
  }

  @media only screen and ${width[1300]} {
    width: 50%;
    height: 50%;

    img {
      height: 70vw;
    }

    :hover img {
      height: 75vw;
      filter: grayscale(0%);
      cursor: pointer;
    }
  }

  @media only screen and ${width[660]} {
    img {
      height: 100%;
    }

    :hover img {
      height: 110%;
      filter: grayscale(0%);
      cursor: pointer;
    }
  }
`;

export const CollectionSectionTitle = styled.div`
  position: absolute;
  color: white;
  z-index: 2;
  font-size: 2em;
  pointer-events: none;
  transition: font-size 0.5s;
`;
