import { createAction } from "typesafe-actions";
import { RESET_PASSWORD, CLEAR_RESET_PASSWORD_STATE } from "./consts";

export type ResetPasswordProps = {
  resetPasswordData: {
    newPassword: string;
    resetPasswordLink: string;
  };
};

export const resetPasswordStarted = createAction(
  RESET_PASSWORD.started,
  (resetPasswordData): ResetPasswordProps => ({
    resetPasswordData,
  })
)();

export const clearResetPasswordState = createAction(
  CLEAR_RESET_PASSWORD_STATE,
  () => ({})
)();
