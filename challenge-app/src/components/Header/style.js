import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  flex: 1;
  height: 56px;
  align-items: center;
  padding: 2rem;
`;

export const HeaderLogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: auto;
`;

export const HeaderLogo = styled.img`
  height: 34px;
  width: 145px;
  object-fit: cover;
`;

export const SearchBarContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const SearchBar = styled.div`
  height: 20px;
  width: 100%;
  background-color: #fff;
`;

export const AvatarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: auto;
`;

export const Avatar = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: lightgreen;
`;
