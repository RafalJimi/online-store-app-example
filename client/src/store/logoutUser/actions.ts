import { LOGOUT_USER } from "./consts";

import { createAction } from "typesafe-actions";

export const logoutUserStarted = createAction(
  LOGOUT_USER.started,
  () => ({})
)();
