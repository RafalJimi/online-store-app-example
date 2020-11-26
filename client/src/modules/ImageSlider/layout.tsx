import React from "react";
import ImageGallery from "react-image-gallery";
import {
  ImageGalleryContainer,
  CloseImageGalleryButton,
} from "./layout.styled";
import "react-image-gallery/styles/css/image-gallery.css";

type ImageGalleryLayouttProps = {
  Images: any;
  handleOnClick: (e: React.MouseEvent) => void;
  imageGalleryIsOpen: boolean;
};

export const ImageGalleryLayout = ({
  Images,
  handleOnClick,
  imageGalleryIsOpen,
}: ImageGalleryLayouttProps) => {
  return (
    <ImageGalleryContainer isOpen={imageGalleryIsOpen}>
      <CloseImageGalleryButton onClick={handleOnClick}>
        <i className="fas fa-times" />
      </CloseImageGalleryButton>
      <div>
        <ImageGallery
          /*         ref={ref} */
          items={Images}
          lazyLoad={true}
          infinite={true}
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={true}
          showIndex={false}
          showNav={false}
          isRTL={false}
          thumbnailPosition={"bottom"}
          slideDuration={450}
          slideInterval={2000}
          slideOnThumbnailOver={false}
          additionalClass="image-gallery"
        />
      </div>
    </ImageGalleryContainer>
  );
};
