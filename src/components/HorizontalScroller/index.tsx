import React from 'react';
import { StyledHorizontalScroller } from './style';

export function HorizontalScroller({ children, ...props }: React.HTMLProps<HTMLDivElement>) {
  return <StyledHorizontalScroller>{children}</StyledHorizontalScroller>;
}
