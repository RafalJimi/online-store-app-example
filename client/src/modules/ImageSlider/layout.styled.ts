import styled from "styled-components";

type ImageGalleryProps = {
  isOpen: boolean;
};

export const ImageGalleryContainer = styled.div<ImageGalleryProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
  z-index: 20;
  background-color: ${(props) => props.theme.colors.background};
  left: 0;
  top: 0;
  overflow: scroll;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;

  .image-gallery {
    height: auto;
  }
`;

export const CloseImageGalleryButton = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 1.5em;
`;
