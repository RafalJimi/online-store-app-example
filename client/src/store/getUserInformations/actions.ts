import { createAction } from "typesafe-actions";
import { GET_USER_INFORMATIONS } from "./consts";

export const getUserInformationsStarted = createAction(
  GET_USER_INFORMATIONS.started,
  () => ({})
)();
