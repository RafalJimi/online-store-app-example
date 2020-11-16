import React from "react";
import Dropzone from "react-dropzone";
import { Image } from "../../store/uploadImage/reducer";
import { FileUploadLayoutContainer, ImagesContainer } from "./layout.styled";


type FileUploadLayoutProps = {
  onDrop: (files: any) => void;
  handleDeleteImage: (
    id: number,
    fileName: string,
    path: string
  ) => (event: React.MouseEvent) => void;
  images: Image[];
};

export const FileUploadLayout = ({
  onDrop,
  handleDeleteImage,
  images,
}: FileUploadLayoutProps) => {
  let imgKey = 0;
  return (
    <FileUploadLayoutContainer>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/PlusCM128.svg/1200px-PlusCM128.svg.png"
              style={{ height: "5rem" }}
            />
          </div>
        )}
      </Dropzone>

      <ImagesContainer>
        {images.map((image: Image) => {
          return (
            <div
              key={imgKey++}
              onClick={handleDeleteImage(image.id, image.fileName, image.path)}
            >
              <img
                src={`http://localhost:5000/${image.path}`}
                alt={`productImg-${image.id}`}
              />
            </div>
          );
        })}
      </ImagesContainer>
    </FileUploadLayoutContainer>
  );
};
