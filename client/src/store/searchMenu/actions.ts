import { createAction } from "typesafe-actions";

import { TOGGLE_SEARCH_MENU } from "./consts";

export const toggleSearchMenu = createAction(TOGGLE_SEARCH_MENU, () => ({}))();
