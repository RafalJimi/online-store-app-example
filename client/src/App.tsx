import React, { Suspense, useState, useCallback } from "react";

import { BrowserRouter as Switch, Route } from "react-router-dom";

import { NavBar } from "./modules/NavBar/index";
import { slide as Menu } from "react-burger-menu";

export const App = () => {
  const [Open, SetOpen] = useState(false);

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    /* SetOpen(!Open); */
  }, []);

  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        {/* <Menu right isOpen={Open} width={"100%"}></Menu> */}
      </Suspense>
    </Switch>
  );
};
