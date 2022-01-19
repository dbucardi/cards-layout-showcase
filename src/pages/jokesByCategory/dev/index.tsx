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
import chuckNorrisImg from '../../../assets/images/chuck-norris-card1.jpg';

const headerImage = <img alt="Chuck Norris wearing a jacket holding a mug" src={chuckNorrisImg} />;

const category = 'dev';

export function JokesByCategoryDevPage() {
  const { jokes, seenJokes, loading, error, setSeenJokes } = useJokesState(category);

  const handleJokeSeen = (seenJoke: IJoke) => () => {
    const newSeenJokes = saveSeenJoke(seenJoke);
    setSeenJokes(newSeenJokes);
  };

  const renderRandomJokesSection = () => (
    <section>
      <h1>{category} jokes </h1>
      <Row>
        {jokes.map((joke) => (
          <Col key={joke.id} sm={100} md={50} lg={20}>
            <JokeCard joke={joke} onJokeSeen={handleJokeSeen(joke)} fadeoutJoke={false} />
          </Col>
        ))}
      </Row>
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
          {error ? 'Ops, somenthing went wrong with our application, try to refresh the page.' : <></>}
        </>
      )}
    </Layout>
  );
}
