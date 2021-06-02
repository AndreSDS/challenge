import styled from "styled-components";
import COLORS from "../../assets/colors";

export const NavbarContainer = styled.ul``;

export const NavItemButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding: 0px;
  margin: 15px 0;
  cursor: pointer;
  text-decoration: none;
  color: ${COLORS.white};
`;

export const NavbarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const NavItemIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  height: 48px;
  width: 48px;
  border-radius: 16px;
  opacity: 0.16;
  background-color: ${COLORS.blue300};
`;

export const NavItemIcon = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  margin-left: 16px;
  opacity: 0.56;
  color: ${COLORS.white};
`;
