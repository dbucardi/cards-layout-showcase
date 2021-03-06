import styled, { css } from 'styled-components';
import { IColProps } from './interfaces';
import { mediaQueries } from '../../theme/globalStyles';

export const aligmentCss = css`
  display: flex;
  flex-direction: column;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  margin-left: -15px;
`;

export const StyledCol = styled.div<IColProps>`
  flex-grow: 0;
  flex-shrink: 1;
  padding: 15px;
  ${(props) => (props.align ? aligmentCss : '')}
  align-items: ${({ align = 'initial' }) => align};
  justify-content: ${({ align = 'initial' }) => align};
  @media ${mediaQueries.sm} {
    flex-basis: ${(props) => props.sm}%;
    min-width: ${(props) => props.sm}%;
  }
  @media ${mediaQueries.md} {
    flex-basis: ${(props) => props.md}%;
    min-width: ${(props) => props.md}%;
  }
  @media ${mediaQueries.lg} {
    flex-basis: ${(props) => props.lg}%;
    min-width: ${(props) => props.lg}%;
  }
`;
