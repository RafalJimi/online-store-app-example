import { createActionType } from "../types/actions";

export const GET_CART_ITEMS = createActionType("GET_CART_ITEMS");

export const ADD_TO_CART = createActionType("ADD_TO_CART");

export const REMOVE_CART_ITEM = createActionType("REMOVE_CART_ITEM");

export const SET_QUANTITY = createActionType("SET_QUANTITY");

export const CLEAR_CART = "CLEAR_CART";
