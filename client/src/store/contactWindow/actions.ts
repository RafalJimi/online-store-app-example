import { createAction } from "typesafe-actions";

import { TOGGLE_CONTACT_WINDOW } from "./consts";

export const toggleContactWindow = createAction(
  TOGGLE_CONTACT_WINDOW,
  () => ({})
)();
