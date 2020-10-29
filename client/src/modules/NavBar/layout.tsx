import React from "react";
import { LeftMenu } from "./components/LeftMenu/index";
import { Logo } from "./components/Logo";
import { RightMenu } from "./components/RightMenu/index";

import { Nav } from "./layout.styled";

export const NavBarLayout = () => (
  <Nav>
    <LeftMenu />
    <Logo />
    <RightMenu />
  </Nav>
);
