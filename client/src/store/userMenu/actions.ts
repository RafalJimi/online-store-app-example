import { createAction } from "typesafe-actions";

import { TOGGLE_USER_MENU } from "./consts";

export const toggleUserMenu = createAction(TOGGLE_USER_MENU, () => ({}))();
