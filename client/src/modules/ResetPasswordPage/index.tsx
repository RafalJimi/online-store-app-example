import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  resetPasswordStarted,
  clearResetPasswordState,
} from "../../store/resetPassword/actions";
import {
  resetPasswordMessageRX,
  resetPasswordIsErrorRX,
} from "../../store/resetPassword/selectors";
import { toast } from "react-toastify";
import { lettersAndNumbers } from "../../helpers/formats";
import { ResetPasswordPageLayout } from "./layout";

type ResetPasswordPageProps = {
  match: { params: { token: string } };
};

export const ResetPasswordPage = ({ match }: ResetPasswordPageProps) => {
  const [Token, setToken] = useState("");
  const [PasswordInput, setPasswordInput] = useState({
    textChange: "notChanged",
    value: "",
    error: "",
  });
  const [ShowPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const resetPasswordMessage = useSelector(resetPasswordMessageRX);
  const resetPasswordIsError = useSelector(resetPasswordIsErrorRX);

  useEffect(() => {
    let token = match.params.token;
    if (token) {
      setToken(token);
    }
  }, []);

  const handlePasswordInput = (text: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (PasswordInput.textChange === "notChanged")
      setPasswordInput({
        ...PasswordInput,
        value: e.target.value,
        textChange: "changed",
      });
    else
      setPasswordInput({
        ...PasswordInput,
        value: e.target.value,
      });
  };

  useEffect(() => {
    if (PasswordInput.textChange === "changed" && PasswordInput.value === "")
      setPasswordInput({
        ...PasswordInput,
        error: "This field must be completed",
      });
    else if (
      PasswordInput.value.length < 6 &&
      PasswordInput.textChange === "changed"
    )
      setPasswordInput({
        ...PasswordInput,
        error: "Required min 6 characters",
      });
    else if (
      !lettersAndNumbers.test(PasswordInput.value) &&
      PasswordInput.textChange === "changed"
    )
      setPasswordInput({
        ...PasswordInput,
        error: "Password must contain letters and numbers",
      });
    else setPasswordInput({ ...PasswordInput, error: "" });
  }, [PasswordInput.value]);

  const handleToggleShowPassword = useCallback(
    (e: React.MouseEvent) => {
      setShowPassword(!ShowPassword);
    },
    [ShowPassword]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (PasswordInput.value) {
      const resetPasswordData = {
        newPassword: PasswordInput.value,
        resetPasswordLink: Token,
      };
      dispatch(resetPasswordStarted(resetPasswordData));
    }
  };

  useEffect(() => {
    if (resetPasswordMessage) {
      toast.success(resetPasswordMessage);
      history.push("/");
    }
  }, [resetPasswordMessage]);

  useEffect(() => {
    if (resetPasswordIsError) toast.error(resetPasswordIsError);
  }, [resetPasswordIsError]);

  useEffect(() => {
    return () => {
      dispatch(clearResetPasswordState());
    };
  }, []);

  return (
    <ResetPasswordPageLayout
      handleSubmit={handleSubmit}
      handlePasswordInput={handlePasswordInput}
      password={PasswordInput.value}
      passwordError={PasswordInput.error}
      showPassword={ShowPassword}
      handleToggleShowPassword={handleToggleShowPassword}
    />
  );
};
