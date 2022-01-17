import React from "react";
import { StyledCircleImage } from "./style";

interface ICircleIamgeProps {
  children: React.ReactNode;
}

export function CircleImage({ children }: ICircleIamgeProps) {
  return <StyledCircleImage>{children}</StyledCircleImage>;
}
