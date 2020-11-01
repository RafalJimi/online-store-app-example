import { createAction } from "typesafe-actions";

import { TOGGLE_LOGIN_MENU } from "./consts";

export const toggleLoginMenu = createAction(TOGGLE_LOGIN_MENU, () => ({}))();
