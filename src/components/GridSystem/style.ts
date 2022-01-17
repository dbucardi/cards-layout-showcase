import styled from "styled-components";
import { IColProps } from "./interfaces";
import { mediaQueries } from "../../Layout/globalStyles";

const baseWidth = 8.333333;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  margin-left: -10px;
  margin-right: -10px;
`;

export const StyledCol = styled.div<IColProps>`
  flex-grow: 0;
  flex-shrink: 1;
  padding: 10px;
  @media ${mediaQueries.sm} {
    flex-basis: ${(props) => props.sm * baseWidth}%;
  }
  @media ${mediaQueries.md} {
    flex-basis: ${(props) => props.md * baseWidth}%;
  }
  @media ${mediaQueries.lg} {
    flex-basis: ${(props) => props.lg * baseWidth}%;
  }
`;
