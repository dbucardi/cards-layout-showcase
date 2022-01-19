import styled from 'styled-components';
import { ICircleImageProps } from '.';

export const StyledCircleImage = styled.div<ICircleImageProps>`
  img {
    display: block;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: ${({ lineColor }) => lineColor};
    border: 5px solid ${({ lineColor }) => lineColor};
    object-fit: cover;
  }
`;
