import styled from "styled-components";
import COLORS from "../../assets/colors";

export const AvatarContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  height: auto;
  padding: 12px;
  border-radius: 8px;
`;

export const AvatarPhoto = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin: 0px 8px;
  background-color: antiquewhite;
`;

export const AvatarName = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.white};
`;
