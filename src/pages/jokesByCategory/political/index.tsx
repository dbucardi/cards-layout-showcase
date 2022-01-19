import { Layout } from '../../../components/Layout';
import { Col, Row } from '../../../components/GridSystem';
import { CircleImage } from '../../../components/CircleImage';
import { Spinner } from '../../../components/Spinner';
import { useJokesState } from '../../../state/jokesState';
import { JokeCard } from '../../../components/JokeCard';
import { IJoke } from '../../../services/chuckNorris/interfaces';
import { saveSeenJoke } from '../../../services/chuckNorris';
import { HorizontalScroller } from '../../../components/HorizontalScroller';
import { StyledSeenJokesHeader } from '../style';
import { StyledGridContainer, StyledGridItem } from './style';
import chuckNorrisImg from '../../../assets/images/chuck-norris-card3.jpg';

const headerImage = (
  <img alt="Chuck Norris wearing a suit with the united states flag on the background" src={chuckNorrisImg} />
);

const category = 'history';

export function JokesByCategoryPoliticalPage() {
  const { jokes, seenJokes, loading, setSeenJokes } = useJokesState(category);

  const handleJokeSeen = (seenJoke: IJoke) => () => {
    const newSeenJokes = saveSeenJoke(seenJoke);
    setSeenJokes(newSeenJokes);
  };

  const renderRandomJokesSection = () => (
    <section>
      <h1>{category} jokes </h1>
      <StyledGridContainer>
        {jokes.map((joke, index) => (
          <StyledGridItem>
            <JokeCard joke={joke} onJokeSeen={handleJokeSeen(joke)} fadeoutJoke={false} />
          </StyledGridItem>
        ))}
      </StyledGridContainer>
    </section>
  );

  const renderSeenJokesSection = () => (
    <section>
      <StyledSeenJokesHeader>
        seen jokes
        <hr />
      </StyledSeenJokesHeader>

      <HorizontalScroller>
        <Row style={{ flexWrap: 'nowrap' }}>
          {seenJokes.map((joke) => (
            <Col key={joke.id} sm={100} md={50} lg={20}>
              <JokeCard joke={joke} fadeoutJoke small />
            </Col>
          ))}
        </Row>
      </HorizontalScroller>
    </section>
  );

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CircleImage width={250} height={250}>
            {headerImage}
          </CircleImage>
          {renderRandomJokesSection()}
          {seenJokes.length > 0 ? renderSeenJokesSection() : <></>}
        </>
      )}
    </Layout>
  );
}
