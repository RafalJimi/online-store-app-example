import { fork } from "redux-saga/effects";

import { registerUserSaga } from "./registerUser/saga";
import { activationUserSaga } from "./activationUser/saga";
import { loginUserSaga } from "./loginUser/saga";
import { logoutSaga } from "./logoutUser/saga";

export function* rootSaga(services = {}) {
  yield fork(registerUserSaga);
  yield fork(activationUserSaga);
  yield fork(loginUserSaga);
  yield fork(logoutSaga);
}

