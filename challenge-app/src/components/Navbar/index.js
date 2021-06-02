import React from "react";
import {NavbarContainer, NavbarItem} from "./style";

function Navbar({navItems}) {
  return (
    <NavbarContainer>
      {navItems.map((item, index) => (
        <NavbarItem key={index}>{item}</NavbarItem>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;

