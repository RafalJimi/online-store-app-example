import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleImageGallery } from "../../store/imageGallery/actions";
import {
  imageGalleryIsOpenRX,
  imagesFromGalleryRX,
} from "../../store/imageGallery/selectors";
import { ImageGalleryLayout } from "./layout";

export const ImageGallery = () => {
  const dispatch = useDispatch();
  const imageGalleryIsOpen = useSelector(imageGalleryIsOpenRX);
  const images = useSelector(imagesFromGalleryRX);

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    dispatch(toggleImageGallery());
  }, []);

  return (
    <ImageGalleryLayout
      Images={images}
      handleOnClick={handleOnClick}
      imageGalleryIsOpen={imageGalleryIsOpen}
    />
  );
};
