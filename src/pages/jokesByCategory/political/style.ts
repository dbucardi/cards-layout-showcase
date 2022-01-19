import styled from 'styled-components';
import { mediaQueries } from '../../../theme/globalStyles';

export const StyledGridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'a1 a1 a4 a5'
    'a2 a3 a3 a5';
  & :nth-child(1) {
    grid-area: a1;
  }
  & :nth-child(2) {
    grid-area: a2;
  }
  & :nth-child(3) {
    grid-area: a3;
  }
  & :nth-child(4) {
    grid-area: a4;
  }
  & :nth-child(5) {
    grid-area: a5;
  }
  @media ${mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'a1 a1'
      'a2 a3'
      'a4 a3'
      'a5 0';
  }
`;
export const StyledGridItem = styled.div`
  & > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
