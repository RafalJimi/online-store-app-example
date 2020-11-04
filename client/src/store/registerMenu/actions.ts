import { createAction } from "typesafe-actions";

import { TOGGLE_REGISTER_MENU } from "./consts";

export const toggleRegisterMenu = createAction(
  TOGGLE_REGISTER_MENU,
  () => ({})
)();
