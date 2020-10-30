import { createAction } from "typesafe-actions";

import { TOGGLE_BURGER_MENU } from "./consts";

export const toggleBurgerMenu = createAction(TOGGLE_BURGER_MENU, () => ({}))();
