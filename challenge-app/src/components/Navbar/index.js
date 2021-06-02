import React from "react";
import { FaCode } from "react-icons/fa";

import {
  NavbarContainer,
  NavbarItem,
  NavItemButton,
  NavItemIconContainer,
  NavItemIcon,
} from "./style";

function Navbar({ navItems }) {
  return (
    <NavbarContainer>
      {navItems.map((item, index) => (
        <NavItemButton href="#" key={index}>
          <NavbarItem>
            <NavItemIconContainer>
              <FaCode size={22} />
            </NavItemIconContainer>
            <NavItemIcon>{item}</NavItemIcon>
          </NavbarItem>
        </NavItemButton>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
