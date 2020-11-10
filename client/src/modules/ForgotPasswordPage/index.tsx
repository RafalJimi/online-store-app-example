import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  forgetPasswordStarted,
  clearForgetPasswordState,
} from "../../store/forgetPassword/actions";
import {
  forgetPasswordMessageRX,
  forgetPasswordIsErrorRX,
} from "../../store/forgetPassword/selectors";
import { toast } from "react-toastify";
import { email } from "../../helpers/formats";
import { ForgetPasswordPageLayout } from "./layout";

export const ForgetPasswordPage = () => {
  const [EmailInput, setEmailInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const forgetPasswordMessage = useSelector(forgetPasswordMessageRX);
  const forgetPasswordIsError = useSelector(forgetPasswordIsErrorRX);

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (EmailInput.textChange === "notChanged")
      setEmailInput({
        ...EmailInput,
        value: e.target.value,
        textChange: "changed",
      });
    else
      setEmailInput({
        ...EmailInput,
        value: e.target.value,
      });
  };

  useEffect(() => {
    if (EmailInput.textChange === "changed" && EmailInput.value === "")
      setEmailInput({ ...EmailInput, error: "This field must be completed" });
    else if (
      !email.test(EmailInput.value) &&
      EmailInput.textChange === "changed"
    )
      setEmailInput({
        ...EmailInput,
        error: "Please enter a valid e-mail password",
      });
    else setEmailInput({ ...EmailInput, error: "" });
  }, [EmailInput.value]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (EmailInput.value) {
      dispatch(forgetPasswordStarted(EmailInput.value));
    }
  };

  useEffect(() => {
    if (forgetPasswordMessage) {
      toast.dark(forgetPasswordMessage);
      history.push("/");
    }
  }, [forgetPasswordMessage]);

  useEffect(() => {
    if (forgetPasswordIsError) toast.dark(forgetPasswordIsError);
  }, [forgetPasswordIsError]);

  useEffect(() => {
    return () => {
      dispatch(clearForgetPasswordState());
    };
  }, []);

  return (
    <ForgetPasswordPageLayout
      handleSubmit={handleSubmit}
      handleEmailInput={handleEmailInput}
      email={EmailInput.value}
      emailError={EmailInput.error}
    />
  );
};
