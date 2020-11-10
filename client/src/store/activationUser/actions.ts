import { createAction } from "typesafe-actions";
import { ACTIVATION_USER, CLEAR_ACTIVATION_USER_STATE } from "./consts";

export type ActivationUserProps = {
  token: string;
};

export const activationUserStarted = createAction(
  ACTIVATION_USER.started,
  (token): ActivationUserProps => ({
    token,
  })
)();

export const clearActivationUserState = createAction(
  CLEAR_ACTIVATION_USER_STATE,
  () => ({})
)();
