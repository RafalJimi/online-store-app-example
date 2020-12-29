import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

type ImageGalleryProps = {
  isOpen: boolean;
};

export const ImageGalleryContainer = styled.div<ImageGalleryProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 15;
  background-color: ${(props) => props.theme.colors.background};
  left: 0;
  top: 0;
  overflow: scroll;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;

  .image-gallery {
    width: 80%;
  }

  @media only screen and ${width[500]} {
    .image-gallery {
      width: 100%;
    }
  }
`;

export const CloseImageGalleryButton = styled.div`
  position: fixed;
  right: 20px;
  top: 10px;
  font-size: 1.5em;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
