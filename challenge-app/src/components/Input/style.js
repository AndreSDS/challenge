import styled from "styled-components";
import COLORS from '../../assets/colors';

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: auto;
  margin: 0px 0px;
`;

export const InputField = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 14px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  border: none;
  outline: none;
  height: 56px;
  flex: none;
  order: 0;
  align-self: stretch;
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif, sans-serif;
  line-height: 24px;
  color: ${COLORS.white};
`;