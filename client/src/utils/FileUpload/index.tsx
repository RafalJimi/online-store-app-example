import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadImageStarted,
  deleteImageStarted,
} from "../../store/uploadImage/actions";
import { uploadedImagesRX } from "../../store/uploadImage/selectors";
import { FileUploadLayout } from "./layout";

export const FileUpload = () => {
  const [Id, setId] = useState<number>(0);

  const dispatch = useDispatch();
  const images = useSelector(uploadedImagesRX);

  const onDrop = (files: any) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    dispatch(uploadImageStarted(Id, formData));
    setId(Id + 1);
  };

  const handleDeleteImage = useCallback(
    (id: number) => (event: React.MouseEvent) => {
      /* dispatch(deleteImage(id)); */
    },
    [dispatch]
  );

  return (
    <FileUploadLayout
      onDrop={onDrop}
      handleDeleteImage={handleDeleteImage}
      images={images}
    />
  );
};
