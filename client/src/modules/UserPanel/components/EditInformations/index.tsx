import React, { useState, ChangeEvent, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInformationsStarted } from "../../../../store/getUserInformations/actions";
import { updateUserInformationsStarted } from "../../../../store/updateUserInformations/actions";
import {
  userInformationsRX,
  getUserInformationsIsErrorRX,
} from "../../../../store/getUserInformations/selectors";
import {
  updateUserInformationsResultRX,
  updateUserInformationsIsErrorRX,
} from "../../../../store/updateUserInformations/selectors";
import { toast } from "react-toastify";
import { onlyLetters } from "../../../../helpers/formats";
import { InformationsFormLayout } from "./layout";

export const InformationsForm = () => {
  const [UserData, setUserData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    postCode: "",
  });

  const dispatch = useDispatch();

  const userInformations = useSelector(userInformationsRX);
  const userInformationsIsError = useSelector(getUserInformationsIsErrorRX);

  const updateUserInformationsResult = useSelector(
    updateUserInformationsResultRX
  );
  const updateUserInformationsIsError = useSelector(
    updateUserInformationsIsErrorRX
  );

  const handleOnChange = (text: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setUserData({ ...UserData, [text]: e.target.value });
  };

  const handleGetUserInformations = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(getUserInformationsStarted());
  }, []);

  useEffect(() => {
    if (userInformations) {
      setUserData({
        ...UserData,
        firstName: userInformations.firstName,
        lastName: userInformations.lastName,
        city: userInformations.city,
        address: userInformations.address,
        postCode: userInformations.postCode,
      });
    }
  }, [userInformations]);

  useEffect(() => {
    if (userInformationsIsError) toast.dark(userInformationsIsError);
  }, [userInformationsIsError]);

  const handleUpdateUserInformations = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (
        !onlyLetters.test(UserData.firstName) &&
        UserData.firstName.length < 2
      ) {
        toast.dark(
          "First name input required only letters and min 2 characters"
        );
      } else if (
        !onlyLetters.test(UserData.lastName) &&
        UserData.lastName.length < 2
      ) {
        toast.dark(
          "Last name input required only letters and min 2 characters"
        );
      } else if (!onlyLetters.test(UserData.city) && UserData.city)
        toast.dark("City input required only letters");
      else {
        dispatch(updateUserInformationsStarted(UserData));
      }
    },
    [UserData]
  );

  useEffect(() => {
    if (updateUserInformationsResult) toast.dark(updateUserInformationsResult);
  }, [updateUserInformationsResult]);

  useEffect(() => {
    if (updateUserInformationsIsError)
      toast.dark(updateUserInformationsIsError);
  }, [updateUserInformationsIsError]);

  return (
    <InformationsFormLayout
      handleOnChange={handleOnChange}
      firstName={UserData.firstName}
      lastName={UserData.lastName}
      city={UserData.city}
      address={UserData.address}
      postCode={UserData.postCode}
      handleGetUserInformations={handleGetUserInformations}
      handleUpdateUserInformations={handleUpdateUserInformations}
    />
  );
};
