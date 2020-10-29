import { combineReducers } from "redux";

export type AppState = {};

export const reducer = combineReducers<AppState>({});

export type RootState = ReturnType<typeof reducer>;
