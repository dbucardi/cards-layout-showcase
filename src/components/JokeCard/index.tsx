import React from "react";
import { StyledJokeCard } from "./style";

export interface IJokeCardProps {
  joke: string;
}

export function JokeCard({ joke }: IJokeCardProps) {
  return <StyledJokeCard>{joke}</StyledJokeCard>;
}
