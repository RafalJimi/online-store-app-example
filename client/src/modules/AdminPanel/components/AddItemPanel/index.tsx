import React, { ChangeEvent, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearImagesState } from "../../../../store/uploadImage/actions";
import { uploadedImagesRX } from "../../../../store/uploadImage/selectors";
import { ProductDetail, uploadProductStarted } from "../../../../store/uploadProduct/actions";
import {
  uploadProductResultRX,
  uploadProductIsErrorRX,
} from "../../../../store/uploadProduct/selectors";
import { toast } from "react-toastify";
import { AddItemPanelLayout } from "./layout";

type AddItemDataProps = {
  gender: string;
  collection: string;
  subCategory: string;
  productName: string;
  price: number;
  details: ProductDetail[];
};

export const AddItemPanel = () => {
  const [AddItemData, setAddItemData] = useState<AddItemDataProps>({
    gender: "man",
    collection: "boots",
    subCategory: "sport_shoes",
    productName: "",
    price: 0,
    details: [],
  });
  
  const [ProductDetailInput, setProductDetailInput] = useState("");
  const [Id, setId] = useState(0)

  const dispatch = useDispatch();

  const uploadedImages = useSelector(uploadedImagesRX);

  const uploadProductResult = useSelector(uploadProductResultRX);
  const uploadProductIsError = useSelector(uploadProductIsErrorRX);

  const handleOnChange = (text: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setAddItemData({ ...AddItemData, [text]: e.target.value });
  };
  
  const handleProductDetailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setProductDetailInput(e.target.value);
  };

  const handleAddDetailProductButton = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setAddItemData({
      ...AddItemData,
      details: [...AddItemData.details, { id: Id, text: ProductDetailInput }],
    });
    setProductDetailInput("")
    setId(Id + 1);
  }, [ProductDetailInput, Id])
  
  const handleDeleteDetail = useCallback((id: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setAddItemData({
      ...AddItemData,
      details: AddItemData.details.filter((detail) =>
        detail.id !== id ? detail : null
      ),
    });
  }, [AddItemData.details, Id])
  
  const handleOnSelect = (text: string) => (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setAddItemData({ ...AddItemData, [text]: e.target.value });
  };

  const handleAddItemButton = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (
        !AddItemData.productName ||
        !AddItemData.price
      )
        toast.dark("Please fill all fields.");
      else if (
        !AddItemData.details
      ) toast.dark("You have to add minimum three product details.");
      else if (uploadedImages.length < 3) {
        toast.dark("You have to add minimum three images.");
      } else {
        const addItemData = {
          gender: AddItemData.gender,
          category: AddItemData.collection,
          subCategory: AddItemData.subCategory,
          productName: AddItemData.productName,
          price: AddItemData.price,
          details: AddItemData.details,
          images: uploadedImages,
        };
        dispatch(uploadProductStarted(addItemData));
      }
    },
    [AddItemData, uploadedImages]
  );

  useEffect(() => {
    if (uploadProductResult) {
      toast.dark("Added product successfully.");
      dispatch(clearImagesState());
      setAddItemData({
        ...AddItemData,
        gender: "man",
        collection: "boots",
        subCategory: "sport shoes",
        productName: "",
        price: 0,
        details: [],
      });
    }
  }, [uploadProductResult]);

  useEffect(() => {
    if (uploadProductIsError) toast.dark(uploadProductIsError);
  }, [uploadProductIsError]);

  return (
    <AddItemPanelLayout
      gender={AddItemData.gender}
      collection={AddItemData.collection}
      subCategory={AddItemData.subCategory}
      productName={AddItemData.productName}
      price={AddItemData.price}
      handleProductDetailInput={handleProductDetailInput}
      ProductDetailInput={ProductDetailInput}
      handleAddDetailProductButton={handleAddDetailProductButton}
      details={AddItemData.details}
      handleDeleteDetail={handleDeleteDetail}
      handleOnChange={handleOnChange}
      handleOnSelect={handleOnSelect}
      handleAddItemButton={handleAddItemButton}
    />
  );
};
