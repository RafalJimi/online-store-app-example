import { fork } from "redux-saga/effects";

import { registerUserSaga } from "./registerUser/saga";
import { activationUserSaga } from "./activationUser/saga";
import { loginUserSaga } from "./loginUser/saga";
import { logoutSaga } from "./logoutUser/saga";
import { forgetPasswordSaga } from "./forgetPassword/saga";
import { resetPasswordSaga } from "./resetPassword/saga";

export function* rootSaga(services = {}) {
  yield fork(registerUserSaga);
  yield fork(activationUserSaga);
  yield fork(loginUserSaga);
  yield fork(logoutSaga);
  yield fork(forgetPasswordSaga);
  yield fork(resetPasswordSaga);
}

