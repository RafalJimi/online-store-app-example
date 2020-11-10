import { LOGIN_USER, CLEAR_LOGIN_USER_STATE } from "./consts";

import { createAction } from "typesafe-actions";

export type LoginUserProps = {
  login: {
    email: string;
    password: string;
  };
};

export const loginUserStarted = createAction(
  LOGIN_USER.started,
  (login): LoginUserProps => ({
    login,
  })
)();

export const clearLoginUserState = createAction(
  CLEAR_LOGIN_USER_STATE,
  () => ({})
)();
