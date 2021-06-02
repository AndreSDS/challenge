import styled from 'styled-components';
import COLORS from '../assets/colors';

const {darkblue} = COLORS;

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${darkblue};
`;

export const LayoutContainer = styled.main`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  gap: 40px;
`;