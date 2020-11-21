import { combineReducers } from "redux";

import { BurgerMenuState, burgerMenu } from "./burgerMenu/reducer";
import { LoginMenuState, loginMenu } from "./loginMenu/reducer";
import { RegisterMenuState, registerMenu } from "./registerMenu/reducer";
import { ContactWindowState, contactWindow } from "./contactWindow/reducer";
import { RegisterUserState, registerUser } from "./registerUser/reducer";
import { ActivationUserState, activationUser } from "./activationUser/reducer";
import { LoginUserState, loginUser } from "./loginUser/reducer";
import { LogoutUserState, logoutUser } from "./logoutUser/reducer";
import { ForgetPasswordState, forgetPassword } from "./forgetPassword/reducer";
import { ResetPasswordState, resetPassword } from "./resetPassword/reducer";
import { GetUserDataState, getUserData } from "./getUserData/reducer";
import { UpdateUserDataState, updateUserData } from "./updateUserData/reducer";
import { DeleteUserState, deleteUser } from "./deleteUser/reducer";
import { UploadImageState, uploadImage } from "./uploadImage/reducer";
import { UploadProductState, uploadProduct } from "./uploadProduct/reducer";
import { GetProductsState, getProducts } from "./getProducts/reducer";

export type AppState = {
  burgerMenu: BurgerMenuState;
  loginMenu: LoginMenuState;
  registerMenu: RegisterMenuState;
  contactWindow: ContactWindowState;
  registerUser: RegisterUserState;
  activationUser: ActivationUserState;
  loginUser: LoginUserState;
  logoutUser: LogoutUserState;
  forgetPassword: ForgetPasswordState;
  resetPassword: ResetPasswordState;
  getUserData: GetUserDataState;
  updateUserData: UpdateUserDataState;
  deleteUser: DeleteUserState;
  uploadImage: UploadImageState;
  uploadProduct: UploadProductState;
  getProducts: GetProductsState;
};

export const reducer = combineReducers<AppState>({
  burgerMenu,
  loginMenu,
  registerMenu,
  contactWindow,
  registerUser,
  activationUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
  getUserData,
  updateUserData,
  deleteUser,
  uploadImage,
  uploadProduct,
  getProducts,
});

export type RootState = ReturnType<typeof reducer>;
