import React, { useState, ChangeEvent, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataStarted } from "../../../../store/getUserData/actions";
import { updateUserDataStarted } from "../../../../store/updateUserData/actions";
import { deleteUserStarted } from "../../../../store/deleteUser/actions";
import {
  userDataRX,
  getUserDataIsErrorRX,
} from "../../../../store/getUserData/selectors";
import {
  deleteUserResultRX,
  deleteUserIsErrorRX,
} from "../../../../store/deleteUser/selectors";
import {
  updateUserDataResultRX,
  updateUserDataIsErrorRX,
} from "../../../../store/updateUserData/selectors";
import { toast } from "react-toastify";
import { email, onlyLetters } from "../../../../helpers/formats";
import { EditUserPanelLayout } from "./layout";

export const EditUserPanel = () => {
  const [UserData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    postCode: "",
    role: "user",
    gender: "",
  });

  const dispatch = useDispatch();

  const userData = useSelector(userDataRX);
  const getUserDataIsError = useSelector(getUserDataIsErrorRX);

  const deleteUserResult = useSelector(deleteUserResultRX);
  const deleteUserIsError = useSelector(deleteUserIsErrorRX);

  const updateUserDataResult = useSelector(updateUserDataResultRX);
  const updateUserDataIsError = useSelector(updateUserDataIsErrorRX);

  useEffect(() => {
    setUserData({
      ...UserData,
      firstName: userData.firstName,
      lastName: userData.lastName,
      city: userData.city,
      address: userData.address,
      postCode: userData.postCode,
      role: userData.role ? "admin" : "user",
      gender: userData.gender,
    });
  }, [userData]);

  const handleOnChange = (text: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setUserData({ ...UserData, [text]: e.target.value });
  };

  const handleSelectRole = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserData({ ...UserData, role: e.target.value });
  };

  const handleSelectGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserData({ ...UserData, gender: e.target.value });
  };

  const handleGetUserButton = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (!email.test(UserData.email)) {
        toast.dark("Enter correct e-mail address");
      } else {
        dispatch(getUserDataStarted(UserData.email));
      }
    },
    [UserData.email]
  );

  useEffect(() => {
    if (userData.firstName) toast.dark("User updated successfully!");
  }, [userData]);

  useEffect(() => {
    if (getUserDataIsError) toast.dark(getUserDataIsError);
  }, [getUserDataIsError]);

  const handleDeleteAccountButton = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (!email.test(UserData.email)) {
        toast.dark("Enter correct e-mail address");
      } else {
        dispatch(deleteUserStarted(UserData.email));
      }
    },
    [UserData.email]
  );

  useEffect(() => {
    if (deleteUserResult) toast.dark(deleteUserResult);
  }, [deleteUserResult]);

  useEffect(() => {
    if (deleteUserIsError) toast.dark(deleteUserIsError);
  }, [deleteUserIsError]);

  const handleEditUserButton = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (!email.test(UserData.email)) {
        toast.dark("Enter correct e-mail address");
      } else if (
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
      } else {
        dispatch(updateUserDataStarted(UserData));
      }
    },
    [UserData]
  );

  useEffect(() => {
    if (updateUserDataResult) toast.dark(updateUserDataResult);
  }, [updateUserDataResult]);

  useEffect(() => {
    if (updateUserDataIsError) toast.dark(updateUserDataIsError);
  }, [updateUserDataIsError]);

  return (
    <EditUserPanelLayout
      handleOnChange={handleOnChange}
      handleSelectRole={handleSelectRole}
      handleSelectGender={handleSelectGender}
      email={UserData.email}
      firstName={UserData.firstName}
      lastName={UserData.lastName}
      city={UserData.city}
      address={UserData.address}
      postCode={UserData.postCode}
      role={UserData.role}
      gender={UserData.gender}
      handleGetUserButton={handleGetUserButton}
      handleDeleteAccountButton={handleDeleteAccountButton}
      handleEditUserButton={handleEditUserButton}
    />
  );
};
