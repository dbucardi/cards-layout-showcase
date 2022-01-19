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
import chuckNorrisImg from '../../../assets/images/chuck-norris-card2.jpg';

const headerImage = <img alt="Chuck Norris holding a gun in combat" src={chuckNorrisImg} />;

const category = 'history';

export function JokesByCategoryHistoryPage() {
  const { jokes, seenJokes, loading, error, setSeenJokes } = useJokesState(category);

  const handleJokeSeen = (seenJoke: IJoke) => () => {
    const newSeenJokes = saveSeenJoke(seenJoke);
    setSeenJokes(newSeenJokes);
  };

  const renderRandomJokesSection = () => (
    <section>
      <Row>
        {jokes.map((joke) => (
          <Col key={joke.id} sm={100} md={50} lg={33}>
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
          <Row>
            <Col align="center" sm={100} md={100} lg={30}>
              <CircleImage width={250} height={250}>
                {headerImage}
              </CircleImage>
              <h1>{category} jokes </h1>
            </Col>
            <Col sm={100} md={100} lg={70}>
              {renderRandomJokesSection()}
              {error ? 'Ops, somenthing went wrong with our application, try to refresh the page.' : <></>}
            </Col>
          </Row>

          {seenJokes.length > 0 ? renderSeenJokesSection() : <></>}
        </>
      )}
    </Layout>
  );
}
