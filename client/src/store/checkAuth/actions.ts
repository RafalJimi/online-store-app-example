import { createAction } from "typesafe-actions";
import { CHECK_AUTH } from "./consts";

export const checkAuthStarted = createAction(CHECK_AUTH.started, () => ({}))();
