import React, { Suspense, useState, useCallback } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { NavBar } from "./modules/NavBar/index";
import { BurgerMenu } from "./modules/BurgerMenu/index";
import { LoginMenu } from "./modules/LoginMenu/index";

export const App = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <BurgerMenu />
        <LoginMenu />
      </Suspense>
    </Switch>
  );
};
