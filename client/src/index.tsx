import React, { Suspense } from "react";
import ReactDOM, { Renderer } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Slide, ToastContainer, Zoom } from "react-toastify";
import { NavBar } from "./modules/NavBar/index";
import { BurgerMenu } from "./modules/BurgerMenu/index";
import { LoginMenu } from "./modules/LoginMenu/index";
import { RegisterMenu } from "./modules/RegisterMenu/index";
import { LandingPage } from "./modules/LandingPage/index";
import { ActivatePage } from "./modules/ActivatePage/index";
import { ContactWindow } from ".//modules/Contact/index";
import { Footer } from "./modules/Footer";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render<Renderer>(
  <Provider store={store}>
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={NavBar} />
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
          <Route path="/" exact component={LandingPage} />
          <Route path="/users/activate/:token" exact component={ActivatePage} />
          <Route path="/" component={BurgerMenu} />
          <Route path="/" component={LoginMenu} />
          <Route path="/" component={RegisterMenu} />
          <Route path="/" component={ContactWindow} />
          <Route path="/" component={Footer} />
        </Suspense>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
