import { createAction } from "typesafe-actions";
import { FORGET_PASSWORD, CLEAR_FORGET_PASSWORD_STATE } from "./consts";

export type ForgetPasswordProps = {
  email: string;
};

export const forgetPasswordStarted = createAction(
  FORGET_PASSWORD.started,
  (email): ForgetPasswordProps => ({
    email,
  })
)();

export const clearForgetPasswordState = createAction(
  CLEAR_FORGET_PASSWORD_STATE,
  () => ({})
)();
