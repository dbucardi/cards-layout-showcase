import styled from 'styled-components';
import { IJokeCardProps } from '.';

export const StyledJokeCard = styled.div<IJokeCardProps>`
  background: white;
  border-radius: 15px;
  padding: 15px;
  height: 100%;
  min-height: ${(props) => (props.small ? 'initial' : '200px')};
  font-size: ${(props) => (props.small ? '14px' : 'initial')};
  border: 2px solid transparent;
  box-shadow: var(--card-box-shadow);
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.fadeoutJoke ? '0.5' : '1')};
  &:hover,
  &:focus {
    opacity: 1;
    border: 2px solid var(--high-contrast-text);
  }
`;

export const StyledQuoteImage = styled.img`
  display: block;
  margin: 0 auto;
`;

export const StyledJokeBody = styled.div`
  margin-bottom: 30px;
`;
