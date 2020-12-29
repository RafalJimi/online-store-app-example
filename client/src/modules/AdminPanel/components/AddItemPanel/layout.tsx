import React, { ChangeEvent } from "react";
import {
  AddItemPanelContainer,
  FileUploadContainer,
  SelectInputsContainer,
  TextInputsContainer,
  ItemDescriptionContainer,
  AddProductDetailContainer,
  AddItemPanelInputContainer,
  AddItemPanelButtonsContainer,
} from "./layout.styled";
import { ProductDetail } from "../../../../store/uploadProduct/actions";
import { FileUpload } from "../../../../utils/FileUpload/index";

type AddItemPanelLayoutProps = {
  gender: string;
  collection: string;
  subCategory: string;
  productName: string;
  price: number;
  handleProductDetailInput: (e: ChangeEvent<HTMLInputElement>) => void;
  ProductDetailInput: string;
  handleAddDetailProductButton: (e: React.MouseEvent) => void;
  details: ProductDetail[];
  handleDeleteDetail: (id: number) => (e: React.MouseEvent) => void;
  handleOnChange: (text: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSelect: (text: string) => (e: ChangeEvent<HTMLSelectElement>) => void;
  handleAddItemButton: (e: React.MouseEvent) => void;
};

export const AddItemPanelLayout = ({
  gender,
  collection,
  subCategory,
  productName,
  price,
  handleProductDetailInput,
  ProductDetailInput,
  handleAddDetailProductButton,
  details,
  handleDeleteDetail,
  handleOnChange,
  handleOnSelect,
  handleAddItemButton,
}: AddItemPanelLayoutProps) => (
  <AddItemPanelContainer>
    <TextInputsContainer>
      <AddItemPanelInputContainer prop={productName}>
        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={handleOnChange("productName")}
        />
      </AddItemPanelInputContainer>
      <AddItemPanelInputContainer prop={"asd"}>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={handleOnChange("price")}
        />
      </AddItemPanelInputContainer>
    </TextInputsContainer>
    <SelectInputsContainer>
      <select onChange={handleOnSelect("gender")} value={gender}>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
      <select onChange={handleOnSelect("collection")} value={collection}>
        <option value="shoes">Boots</option>
        <option value="coats">Coats</option>
        <option value="jackets">Jackets</option>
        <option value="skirts">Skirts</option>
        <option value="suits">Suits</option>
      </select>
      {collection === "shoes" ? (
        <select onChange={handleOnSelect("subCategory")} value={subCategory}>
          <option value="sport_shoes">Sport shoes</option>
          <option value="boots">Boots</option>
        </select>
      ) : (
        <select
          disabled
          onChange={handleOnSelect("subCategory")}
          value={subCategory}
        >
          <option value="female">Sport shoes</option>
          <option value="male">Boots</option>
        </select>
      )}
    </SelectInputsContainer>
    <ItemDescriptionContainer>
      <AddProductDetailContainer>
        <input
          type="text"
          placeholder="Product details ..."
          value={ProductDetailInput}
          onChange={handleProductDetailInput}
        />
        <button onClick={handleAddDetailProductButton}>Add detail</button>
      </AddProductDetailContainer>
      <ul>
        Product details :
        {details.map((detail) => {
          return (
            <li key={Date.now()}>
              - {detail.text}{" "}
              <button onClick={handleDeleteDetail(detail.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </ItemDescriptionContainer>
    <FileUploadContainer>
      <FileUpload productName={productName} />
    </FileUploadContainer>
    <AddItemPanelButtonsContainer>
      <button onClick={handleAddItemButton}>Add item</button>
    </AddItemPanelButtonsContainer>
  </AddItemPanelContainer>
);
