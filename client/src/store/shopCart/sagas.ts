import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import {
  addItemToLS,
  removeItemFromLS,
  setQuantityInLS,
} from "../../helpers/basketLocalStorate";

import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SET_QUANTITY,
} from "./consts";
import {
  getCartItemsStarted,
  addToCartStarted,
  removeCartItemStarted,
  setQuantityStarted,
} from "./actions";
import { getType } from "typesafe-actions";
import { basketLS } from "../../helpers/basketLocalStorate";

export function* getCartItems({}: ReturnType<typeof getCartItemsStarted>) {
  try {
    const getItems = localStorage.getItem(basketLS);
    let basket = getItems ? JSON.parse(getItems) : [];
    yield put({
      type: GET_CART_ITEMS.success,
      payload: { cart: basket, cartLength: basket.length },
    });
  } catch (e) {
    yield put({ type: GET_CART_ITEMS.failure, payload: { message: e } });
  }
}

export function* addToCart({ payload }: ReturnType<typeof addToCartStarted>) {
  try {
    addItemToLS(payload.itemData);
    const getItems = localStorage.getItem(basketLS);
    let basket = getItems ? JSON.parse(getItems) : [];
    yield put({
      type: ADD_TO_CART.success,
      payload: { quantity: basket.length },
    });
  } catch (e) {
    yield put({
      type: ADD_TO_CART.failure,
      payload: { error: `Something went wrong: ${e}` },
    });
  }
}

export function* removeCartItem({
  payload,
}: ReturnType<typeof removeCartItemStarted>) {
  try {
    removeItemFromLS(payload.itemData);
    yield put({
      type: REMOVE_CART_ITEM.success,
      payload: { id: payload.itemData.key },
    });
  } catch (e) {
    yield put({
      type: REMOVE_CART_ITEM.failure,
      payload: { error: `Something went wrong: ${e}` },
    });
  }
}

export function* setQuantity({
  payload,
}: ReturnType<typeof setQuantityStarted>) {
  try {
    const { key, quantity } = payload;
    setQuantityInLS(key, quantity);
    yield put({
      type: SET_QUANTITY.success,
      payload: { key: key, quantity: quantity },
    });
  } catch (e) {
    yield put({
      type: SET_QUANTITY.failure,
      payload: { error: `Something went wrong: ${e}` },
    });
  }
}

export function* getCartItemsSaga(): SagaIterator {
  yield takeLatest(getType(getCartItemsStarted), getCartItems);
}

export function* addToCartSaga(): SagaIterator {
  yield takeLatest(getType(addToCartStarted), addToCart);
}

export function* removeCartItemSaga(): SagaIterator {
  yield takeLatest(getType(removeCartItemStarted), removeCartItem);
}

export function* setQuantitySaga(): SagaIterator {
  yield takeLatest(getType(setQuantityStarted), setQuantity);
}
