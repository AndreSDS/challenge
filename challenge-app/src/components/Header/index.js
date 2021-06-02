import React from "react";
import logo from "../../assets/image/Logo.png";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  SearchBarContainer,
  SearchBar,
  AvatarContainer,
  Avatar,
} from "./style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo src={logo} alt="Logo" />
      </HeaderLogoContainer>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
    </HeaderContainer>
  );
}

export default Header;
