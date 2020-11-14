import React from "react";
import Dropzone from "react-dropzone";
import { Image } from "../../store/uploadImage/reducer";

type FileUploadLayoutProps = {
  onDrop: (files: any) => void;
  handleDeleteImage: (id: number) => (event: React.MouseEvent) => void;
  images: Image[];
};

export const FileUploadLayout = ({
  onDrop,
  handleDeleteImage,
  images,
}: FileUploadLayoutProps) => {
  let imgKey = 0;
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
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

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {images.map((image: Image) => {
          return (
            <div key={imgKey++} onClick={handleDeleteImage(image.id)}>
              <img
                style={{ minWidth: "300px", width: "300px", height: "240px" }}
                src={`http://localhost:5000/server/images/shoesman.jpg`}
                alt={`productImg-${image.id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
