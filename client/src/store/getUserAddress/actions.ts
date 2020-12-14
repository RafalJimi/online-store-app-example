import { createAction } from "typesafe-actions";
import { GET_USER_ADDRESS, CLEAR_USER_ADDRESS_STATE } from "./consts";

export const getUserAddressStarted = createAction(
  GET_USER_ADDRESS.started,
  () => ({})
)();

export const clearUserAddressState = createAction(
  CLEAR_USER_ADDRESS_STATE,
  () => ({})
)();
