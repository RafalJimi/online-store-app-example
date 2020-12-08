import { fork } from "redux-saga/effects";

import { registerUserSaga } from "./registerUser/saga";
import { activationUserSaga } from "./activationUser/saga";
import { loginUserSaga } from "./loginUser/saga";
import { logoutSaga } from "./logoutUser/saga";
import { forgetPasswordSaga } from "./forgetPassword/saga";
import { resetPasswordSaga } from "./resetPassword/saga";
import { getUserDataSaga } from "./getUserData/saga";
import { updateUserDataSaga } from "./updateUserData/saga";
import { deleteUserSaga } from "./deleteUser/saga";
import { uploadImageSaga, deleteImageSaga } from "./uploadImage/saga";
import { uploadProductSaga } from "./uploadProduct/saga";
import { getProductsSaga } from "./getProducts/saga";
import { getProductDetailsSaga } from "./getProductDetails/saga";
import {
  getCartItemsSaga,
  addToCartSaga,
  removeCartItemSaga,
  setQuantitySaga,
} from "./shopCart/sagas";
/* import { paymentSaga } from "./payment/saga"; */

export function* rootSaga(services = {}) {
  yield fork(registerUserSaga);
  yield fork(activationUserSaga);
  yield fork(loginUserSaga);
  yield fork(logoutSaga);
  yield fork(forgetPasswordSaga);
  yield fork(resetPasswordSaga);
  yield fork(getUserDataSaga);
  yield fork(updateUserDataSaga);
  yield fork(deleteUserSaga);
  yield fork(uploadImageSaga);
  yield fork(deleteImageSaga);
  yield fork(uploadProductSaga);
  yield fork(getProductsSaga);
  yield fork(getProductDetailsSaga);
  yield fork(getCartItemsSaga);
  yield fork(addToCartSaga);
  yield fork(removeCartItemSaga);
  yield fork(setQuantitySaga);
  /*   yield fork(paymentSaga); */
}