import React from "react";
import { LeftMenu } from "./components/LeftMenu/index";
import { Logo } from "./components/Logo";
import { RightMenu } from "./components/RightMenu/index";

import { NavContainer } from "./layout.styled";

export const NavBarLayout = () => (
  <NavContainer>
    <LeftMenu />
    <Logo />
    <RightMenu />
  </NavContainer>
);
