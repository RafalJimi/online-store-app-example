import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  uploadImageStarted,
  deleteImageStarted,
} from "../../store/uploadImage/actions";
import { uploadedImagesRX } from "../../store/uploadImage/selectors";
import { FileUploadLayout } from "./layout";

type FileUploadProps = {
  productName: string;
};

export const FileUpload = ({ productName }: FileUploadProps) => {
  const [Id, setId] = useState<number>(0);

  const dispatch = useDispatch();
  const images = useSelector(uploadedImagesRX);

  const onDrop = (files: any) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    if (!productName) {
      toast.dark("Before the addition the images you have to input product name.")
    } else {
          dispatch(uploadImageStarted(Id, formData, productName));
          setId(Id + 1);
    }
  };

  const handleDeleteImage = useCallback(
    (id: number, fileName: string, path: string) => (event: React.MouseEvent) => {
      dispatch(deleteImageStarted(id, fileName, path));
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
