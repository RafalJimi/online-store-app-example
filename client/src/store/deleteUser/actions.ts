import { createAction } from "typesafe-actions";
import { DELETE_USER, CLEAR_DELETE_USER_STATE } from "./consts";

export type GetUserDataProps = {
  email: string;
};

export const deleteUserStarted = createAction(
  DELETE_USER.started,
  (email): GetUserDataProps => ({
    email,
  })
)();

export const clearDeleteUserState = createAction(
  CLEAR_DELETE_USER_STATE,
  () => ({})
)();
