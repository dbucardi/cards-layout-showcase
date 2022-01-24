import { StyledJokeBody, StyledJokeCard, StyledQuoteImage } from './style';
import quoteImg from '../../assets/images/quote.png';
import { IJoke } from '../../services/chuckNorris/interfaces';

export interface IJokeCardProps {
  joke: IJoke;
  fadeoutJoke?: boolean;
  small?: boolean;
}

export function JokeCard(props: IJokeCardProps) {
  const { joke, fadeoutJoke = true, small = false } = props;
  const quoteSize = small ? 32 : 64;

  return (
    <StyledJokeCard tabIndex={0} {...props} fadeoutJoke={fadeoutJoke} small={small}>
      <StyledQuoteImage src={quoteImg} alt="" width={quoteSize} height={quoteSize} />
      <StyledJokeBody className="joke-card-body">{joke.value}</StyledJokeBody>
    </StyledJokeCard>
  );
}
