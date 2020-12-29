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
import { paymentSaga } from "./payment/saga";
import { getUserAddressSaga } from "./getUserAddress/saga";
import { getTransactionHistorySaga } from "./getTransactionHistory/saga";
import { getTransactionDetailsSaga } from "./getTransactionDetails/saga";
import { searchByTermSaga } from "./searchByTerm/saga";
import { checkAuthSaga } from "./checkAuth/saga";
import { getUserInformationsSaga } from "./getUserInformations/saga";
import { updateUserInformationsSaga } from "./updateUserInformations/saga";
import { getUserTransactionHistorySaga } from "./getUserTransactionHistory/saga";
import { getUserTransactionDetailsSaga } from "./getUserTransactionDetails/saga";

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
  yield fork(paymentSaga);
  yield fork(getUserAddressSaga);
  yield fork(getTransactionHistorySaga);
  yield fork(getTransactionDetailsSaga);
  yield fork(searchByTermSaga);
  yield fork(checkAuthSaga);
  yield fork(getUserInformationsSaga);
  yield fork(updateUserInformationsSaga);
  yield fork(getUserTransactionHistorySaga);
  yield fork(getUserTransactionDetailsSaga);
}