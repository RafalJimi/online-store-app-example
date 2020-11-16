import React, { ChangeEvent } from "react";
import {
  AddItemPanelContainer,
  FileUploadContainer,
  SelectInputsContainer,
  TextInputsContainer,
  ItemDescriptionContainer,
  AddItemPanelInputContainer,
  AddItemPanelButtonsContainer,
} from "./layout.styled";
import { FileUpload } from "../../../../utils/FileUpload/index";

type AddItemPanelLayoutProps = {
  gender: string;
  collection: string;
  subCategory: string;
  productName: string;
  price: number;
  description: string;
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
  description,
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
        <option value="boots">Boots</option>
        <option value="coats">Coats</option>
        <option value="jackets">Jackets</option>
        <option value="skirts">Skirts</option>
        <option value="suits">Suits</option>
      </select>
      {collection === "boots" ? (
        <select onChange={handleOnSelect("subCategory")} value={subCategory}>
          <option value="female">Sport shoes</option>
          <option value="male">Boots</option>
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
      <input
        type="text"
        placeholder="Description ..."
        value={description}
        onChange={handleOnChange("description")}
      />
    </ItemDescriptionContainer>
    <FileUploadContainer>
      <FileUpload productName={productName} />
    </FileUploadContainer>
    <AddItemPanelButtonsContainer>
      <button onClick={handleAddItemButton}>Add item</button>
    </AddItemPanelButtonsContainer>
  </AddItemPanelContainer>
);
