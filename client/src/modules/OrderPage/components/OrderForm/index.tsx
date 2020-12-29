import React, { memo, useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddressStarted } from "../../../../store/getUserAddress/actions";
import { userAddressRX } from "../../../../store/getUserAddress/selectors";
import { email, onlyDigits } from "../../../../helpers/formats";
import { OrderFormLayout } from "./layout";

export const OrderForm = memo(() => {
  const [UserData, setUserData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    city: "",
    address: "",
    postCode: "",
  });
  const [Errors, setErrors] = useState({
    email: "Email is required",
    fullName: "Full name is required",
    phoneNumber: "Phone number is required",
    city: "This field must be completed",
    address: "This field must be completed",
    postCode: "This field must be completed",
  });
  const [IsError, setIsError] = useState(true);

  const dispatch = useDispatch();
  const userAddress = useSelector(userAddressRX);

  useEffect(() => {
    dispatch(getUserAddressStarted());
  }, []);

  useEffect(() => {
    setUserData({
      ...UserData,
      email: userAddress.email,
      fullName: userAddress.fullName,
      city: userAddress.city,
      address: userAddress.address,
      postCode: userAddress.postCode,
    });
    
    setErrors({
      ...Errors,
      email: userAddress.email ? "" : "Email is required",
      fullName: userAddress.fullName ? "" : "Full name is required",
      city: userAddress.city ? "" : "This field must be completed",
      address: userAddress.address ? "" : "This field must be completed",
      postCode: userAddress.postCode ? "" : "This field must be completed",
    });
  }, [userAddress]);

  const handleOnChange = (text: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setUserData({ ...UserData, [text]: e.target.value });
  };

  const handleError = (key: string, text: string) => {
    setErrors({ ...Errors, [key]: text });
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...UserData, email: e.target.value });
  };

  const handlePhoneNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...UserData, phoneNumber: e.target.value });
  };

  useEffect(() => {
    if (!UserData.email) handleError("email", "Email is required");
    else if (!email.test(UserData.email))
      handleError("email", "Please enter a valid e-mail");
    else handleError("email", "");
  }, [UserData.email]);

  useEffect(() => {
    if (UserData.fullName.length < 2)
      handleError("fullName", "Required min 2 characters");
    else handleError("fullName", "");
  }, [UserData.fullName]);

  useEffect(() => {
    if (!onlyDigits.test(UserData.phoneNumber))
      handleError("phoneNumber", "Required only digits");
    else if (UserData.phoneNumber.length < 7)
      handleError("phoneNumber", "Required min 7 digits");
    else handleError("phoneNumber", "");
  }, [UserData.phoneNumber]);

  useEffect(() => {
    if (!onlyDigits.test(UserData.phoneNumber))
      handleError("phoneNumber", "Required only digits");
    else if (UserData.phoneNumber.length < 7)
      handleError("phoneNumber", "Required min 7 digits");
    else handleError("phoneNumber", "");
  }, [UserData.phoneNumber]);

  useEffect(() => {
    if (!UserData.city) handleError("city", "This field must be completed");
    else handleError("city", "");
  }, [UserData.city]);

  useEffect(() => {
    if (!UserData.address)
      handleError("address", "This field must be completed");
    else handleError("address", "");
  }, [UserData.address]);

  useEffect(() => {
    if (!UserData.postCode)
      handleError("postCode", "This field must be completed");
    else handleError("postCode", "");
  }, [UserData.postCode]);

  useEffect(() => {
    if (
      !Errors.email &&
      !Errors.fullName &&
      !Errors.phoneNumber &&
      !Errors.city &&
      !Errors.address &&
      !Errors.postCode
    )
      setIsError(false);
    else setIsError(true);
  }, [Errors]);

  return (
    <OrderFormLayout
      handleOnChange={handleOnChange}
      handleEmailInput={handleEmailInput}
      handlePhoneNumberInput={handlePhoneNumberInput}
      values={UserData}
      errors={Errors}
      isError={IsError}
    />
  );
});
