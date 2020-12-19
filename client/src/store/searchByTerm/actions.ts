import { SEARCH_BY_TERM } from "./consts";

import { createAction } from "typesafe-actions";

export type GetProductsProps = {
  term: string;
};

export const searchByTermStarted = createAction(
  SEARCH_BY_TERM.started,
  (term): GetProductsProps => ({
    term,
  })
)();
