import React, { Suspense } from "react";
import ReactDOM, { Renderer } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/light";

import { NavBar } from "./modules/NavBar/index";
import { Slide, ToastContainer } from "react-toastify";
import { LandingPage } from "./modules/LandingPage/index";
import { Footer } from "./modules/Footer";

import { Loading } from "./modules/LoadingComponent/layout";
import { ActivatePage } from "./modules/ActivatePage/index";
import { ForgetPasswordPage } from "./modules/ForgotPasswordPage/index";
import { ResetPasswordPage } from "./modules/ResetPasswordPage/index";
import { AdminPanel } from "./modules/AdminPanel/index";
import { ProductsPage } from "./modules/ProductsPage/index";
import { DetailProductPage } from "./modules/DetailProductPage/index";
import { ShopCartPage } from './modules/ShopCartPage/index'
import { OrderPage } from "./modules/OrderPage/index";
import { TransactionHistoryPage } from "./modules/TransactionHistoryPage/index";
import { TransactionDetailsPage } from "./modules/TransactionDetailsPage/index";
import { UserPanel } from "./modules/UserPanel/index";
import { UserTransactionHistoryPage } from "./modules/UserTransactionHistoryPage/index";
import { UserTransactionDetailsPage } from "./modules/UserTransactionDetailsPage/index";

import { GlobalStyle } from './styles/globalStyles'
import "react-toastify/dist/ReactToastify.css";

const BurgerMenu = React.lazy(() =>
  import("./modules/BurgerMenu/index").then(({ BurgerMenu }) => ({
    default: BurgerMenu,
  }))
);

const LoginMenu = React.lazy(() =>
  import("./modules/LoginMenu/index").then(({ LoginMenu }) => ({
    default: LoginMenu,
  }))
);

const RegisterMenu = React.lazy(() =>
  import("./modules/RegisterMenu/index").then(({ RegisterMenu }) => ({
    default: RegisterMenu,
  }))
);

const ContactWindow = React.lazy(() =>
  import("./modules/Contact/index").then(({ ContactWindow }) => ({
    default: ContactWindow,
  }))
);

const ImageGallery = React.lazy(() =>
  import("./modules/ImageSlider/index").then(({ ImageGallery }) => ({
    default: ImageGallery,
  }))
);

const SearchMenu = React.lazy(() =>
  import("./modules/SearchMenu/index").then(({ SearchMenu }) => ({
    default: SearchMenu,
  }))
);

ReactDOM.render<Renderer>(
  <Provider store={store}>
    <Router>
      <Switch>
        <Suspense fallback={<Loading />}>
          <ThemeProvider theme={light}>
            <GlobalStyle />
            <NavBar />
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              transition={Slide}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <BurgerMenu />
            <LoginMenu />
            <RegisterMenu />
            <ContactWindow />
            <Route path="/" exact component={LandingPage} />
            <Route
              path="/users/activate/:token"
              exact
              component={ActivatePage}
            />
            <Route
              path="/users/password/forget"
              exact
              component={ForgetPasswordPage}
            />
            <Route
              path="/users/password/reset/:token"
              exact
              component={ResetPasswordPage}
            />
            <Route path="/admin" exact component={AdminPanel} />
            <Route path="/products" component={ProductsPage} />
            <Route
              path="/product/details/id/:productId"
              exact
              render={(props) => <DetailProductPage {...props} />}
            />
            <Route
              path="/product/details/id/:productId"
              exact
              component={ImageGallery}
            />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/shop-cart" exact component={ShopCartPage} />
            <Route
              path="/admin/transactionHistory"
              exact
              component={TransactionHistoryPage}
            />
            <Route
              path="/admin/transactionDetails/:transactionID"
              exact
              render={(props) => <TransactionDetailsPage {...props} />}
            />
            <Route path="/user/informations" exact component={UserPanel} />
            <Route
              path="/user/transactionHistory"
              exact
              component={UserTransactionHistoryPage}
            />
            <Route
              path="/user/transaction/:transactionID"
              exact
              render={(props) => <UserTransactionDetailsPage {...props} />}
            />
            <Route path="/" component={SearchMenu} />
            <Route component={Footer} />
          </ThemeProvider>
        </Suspense>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
