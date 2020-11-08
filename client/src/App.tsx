import React, { Suspense } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { NavBar } from "./modules/NavBar/index";
import { BurgerMenu } from "./modules/BurgerMenu/index";
import { LoginMenu } from "./modules/LoginMenu/index";
import { RegisterMenu } from "./modules/RegisterMenu/index";
import { LandingPage } from "./modules/LandingPage/index";
import { ActivatePage } from "./modules/ActivatePage/index";
import { ContactWindow } from ".//modules/Contact/index";
import { Footer } from "./modules/Footer";

export const App = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" component={NavBar} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/users/activate/:token" exact component={ActivatePage} />
        <Route path="/" component={BurgerMenu} />
        <Route path="/" component={LoginMenu} />
        <Route path="/" component={RegisterMenu} />
        <Route path="/" component={ContactWindow} />
        <Route path="/" component={Footer} />
      </Suspense>
    </Switch>
  );
};
