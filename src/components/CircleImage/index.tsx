import React from 'react';
import { StyledCircleImage } from './style';

export interface ICircleImageProps {
  children: React.ReactNode;
  lineColor?: string;
  width?: number;
  height?: number;
}

export function CircleImage({ lineColor = '#fff', width = 128, height = 128, children }: ICircleImageProps) {
  return (
    <StyledCircleImage lineColor={lineColor} width={width} height={height}>
      {children}
    </StyledCircleImage>
  );
}
