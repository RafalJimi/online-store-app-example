import { createAction } from "typesafe-actions";
import { GET_USER_DATA, CLEAR_USER_DATA_STATE } from "./consts";

export type GetUserDataProps = {
  email: string;
};

export const getUserDataStarted = createAction(
  GET_USER_DATA.started,
  (email): GetUserDataProps => ({
    email,
  })
)();

export const clearUserDataState = createAction(
  CLEAR_USER_DATA_STATE,
  () => ({})
)();
