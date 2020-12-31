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
import { ImageGalleryState, imageGallery } from "./imageGallery/reducer";
import {
  GetProductDetailsState,
  getProductDetails,
} from "./getProductDetails/reducer";
import { ShopCartState, shopCart } from "./shopCart/reducer";
import { PaymentState, payment } from "./payment/reducer";
import { GetUserAddressState, getUserAddress } from "./getUserAddress/reducer";
import {
  GetTransactionHistoryState,
  getTransactionHistory,
} from "./getTransactionHistory/reducer";
import {
  GetTransactionDetailsState,
  getTransactionDetails,
} from "./getTransactionDetails/reducer";
import { SearchMenuState, searchMenu } from "./searchMenu/reducer";
import { SearchByTermState, searchByTerm } from "./searchByTerm/reducer";
import { CheckAuthState, checkAuth } from "./checkAuth/reducer";
import {
  GetUserInformationsState,
  getUserInformations,
} from "./getUserInformations/reducer";
import {
  UpdateUserInformationsState,
  updateUserInformations,
} from "./updateUserInformations/reducer";
import {
  GetUserTransactionHistoryState,
  getUserTransactionHistory,
} from "./getUserTransactionHistory/reducer";
import {
  GetUserTransactionDetailsState,
  getUserTransactionDetails,
} from "./getUserTransactionDetails/reducer";
import { UserMenuState, userMenu } from "./userMenu/reducer";

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
  imageGallery: ImageGalleryState;
  getProductDetails: GetProductDetailsState;
  shopCart: ShopCartState;
  payment: PaymentState;
  getUserAddress: GetUserAddressState;
  getTransactionHistory: GetTransactionHistoryState;
  getTransactionDetails: GetTransactionDetailsState;
  searchMenu: SearchMenuState;
  searchByTerm: SearchByTermState;
  checkAuth: CheckAuthState;
  getUserInformations: GetUserInformationsState;
  updateUserInformations: UpdateUserInformationsState;
  getUserTransactionHistory: GetUserTransactionHistoryState;
  getUserTransactionDetails: GetUserTransactionDetailsState;
  userMenu: UserMenuState;
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
  imageGallery,
  getProductDetails,
  shopCart,
  payment,
  getUserAddress,
  getTransactionHistory,
  getTransactionDetails,
  searchMenu,
  searchByTerm,
  checkAuth,
  getUserInformations,
  updateUserInformations,
  getUserTransactionHistory,
  getUserTransactionDetails,
  userMenu,
});

export type RootState = ReturnType<typeof reducer>;
