import { StyledJokeBody, StyledJokeCard, StyledQuoteImage } from './style';
import quoteImg from '../../assets/images/quote.png';
import { IJoke } from '../../services/chuckNorris/interfaces';
import { useMouseOverDelay } from '../../hooks/useMouseOverDelay';

export interface IJokeCardProps {
  joke: IJoke;
  blurJoke?: boolean;
  small?: boolean;
  onJokeSeen?: () => void;
}

export function JokeCard(props: IJokeCardProps) {
  const { joke, blurJoke = true, small = false, onJokeSeen = () => {} } = props;
  const { handleMouseEnter, handleMouseLeave } = useMouseOverDelay(onJokeSeen);
  const quoteSize = small ? 32 : 64;

  return (
    <StyledJokeCard
      tabIndex={0}
      {...props}
      blurJoke={blurJoke}
      small={small}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledQuoteImage src={quoteImg} alt="" width={quoteSize} height={quoteSize} />
      <StyledJokeBody className="joke-card-body">{joke.value}</StyledJokeBody>
    </StyledJokeCard>
  );
}
