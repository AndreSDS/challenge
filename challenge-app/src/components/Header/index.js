import React from "react";

import SearchBar from "../SearchBar";

import logo from "../../assets/image/Logo.png";
import { HeaderContainer, HeaderLogoContainer, HeaderLogo } from "./style";
import Avatar from "../Avatar";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo src={logo} alt="Logo" />
      </HeaderLogoContainer>

      <SearchBar />
      
      <Avatar />
    </HeaderContainer>
  );
}

export default Header;
