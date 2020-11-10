import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import {
  activationUserStarted,
  clearActivationUserState,
} from "../../store/activationUser/actions";
import {
  activationUserMessageRX,
  activationUserIsErrorRX,
} from "../../store/activationUser/selectors";
import { toast } from "react-toastify";
import { ActivatePageLayout } from "./layout";

type ActivatePageProps = {
  match: { params: { token: string } };
};

export const ActivatePage = ({ match }: ActivatePageProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    token: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const activationUserMessage = useSelector(activationUserMessageRX);
  const activationUserIsLoading = false; /* useSelector(activationUserIsLoadingRX) */
  const activationUserIsError = useSelector(activationUserIsErrorRX);

  useEffect(() => {
    let token = match.params.token;
    //@ts-ignore
    let { firstName } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, token, firstName });
    }

    console.log(token);
  }, [match.params]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { token } = formData;
    dispatch(activationUserStarted(token));
  };

  useEffect(() => {
    if (activationUserMessage) {
      toast.dark(activationUserMessage);
      setTimeout(() => history.push("/"), 3000);
    }
  }, [activationUserMessage]);

  useEffect(() => {
    if (activationUserIsError) toast.dark(activationUserIsError);
  }, [activationUserIsError]);

  useEffect(() => {
    return () => {
      dispatch(clearActivationUserState());
    };
  }, []);

  return (
    <ActivatePageLayout
      firstName={formData.firstName}
      handleOnSubmit={handleSubmit}
    />
  );
};
