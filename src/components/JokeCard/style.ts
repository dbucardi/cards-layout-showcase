import styled from 'styled-components';
import { IJokeCardProps } from '.';

export const StyledJokeCard = styled.div<IJokeCardProps>`
  background: white;
  border-radius: 15px;
  padding: 15px;
  height: 100%;
  min-height: ${(props) => (props.small ? 'initial' : '300px')};
  font-size: ${(props) => (props.small ? '14px' : 'initial')};
  border: 2px solid transparent;
  &:hover,
  &:focus {
    opacity: 1;
    border: 2px solid var(--high-contrast-text);
  }
  opacity: ${(props) => (props.blurJoke ? '0.5' : 'none')};
`;

export const StyledQuoteImage = styled.img`
  display: block;
  margin: 0 auto;
`;

export const StyledJokeBody = styled.div`
  margin-bottom: 30px;
`;
