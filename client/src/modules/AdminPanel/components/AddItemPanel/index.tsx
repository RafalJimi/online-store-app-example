import React, { ChangeEvent, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearImagesState } from "../../../../store/uploadImage/actions";
import { uploadedImagesRX } from "../../../../store/uploadImage/selectors";
import { uploadProductStarted } from "../../../../store/uploadProduct/actions";
import {
  uploadProductResultRX,
  uploadProductIsErrorRX,
} from "../../../../store/uploadProduct/selectors";
import { toast } from "react-toastify";
import { AddItemPanelLayout } from "./layout";

export const AddItemPanel = () => {
  const [AddItemData, setAddItemData] = useState({
    gender: "man",
    collection: "boots",
    subCategory: "sport shoes",
    productName: "",
    price: 0,
    description: "",
  });

  const dispatch = useDispatch();

  const uploadedImages = useSelector(uploadedImagesRX);

  const uploadProductResult = useSelector(uploadProductResultRX);
  const uploadProductIsError = useSelector(uploadProductIsErrorRX);

  const handleOnChange = (text: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setAddItemData({ ...AddItemData, [text]: e.target.value });
  };

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
        !AddItemData.price ||
        !AddItemData.description
      )
        toast.dark("Please fill all fields.");
      else if (uploadedImages.length < 3) {
        toast.dark("You have to add minimum three images.");
      } else {
        const addItemData = {
          gender: AddItemData.gender,
          collection: AddItemData.collection,
          subCategory: AddItemData.subCategory,
          productName: AddItemData.productName,
          price: AddItemData.price,
          description: AddItemData.description,
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
        description: "",
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
      description={AddItemData.description}
      handleOnChange={handleOnChange}
      handleOnSelect={handleOnSelect}
      handleAddItemButton={handleAddItemButton}
    />
  );
};
