import { Layout } from '../../../components/Layout';
import { Col, Row } from '../../../components/GridSystem';
import { CircleImage } from '../../../components/CircleImage';
import { Spinner } from '../../../components/Spinner';
import { useJokesState } from '../../../state/jokesState';
import { JokeCard } from '../../../components/JokeCard';
import { HorizontalScroller } from '../../../components/HorizontalScroller';
import { StyledSeenJokesHeader } from '../style';
import { StyledGridContainer, StyledGridItem } from './style';
import chuckNorrisImg from '../../../assets/images/chuck-norris-card3.jpg';

const headerImage = (
  <img alt="Chuck Norris wearing a suit with the united states flag on the background" src={chuckNorrisImg} />
);

const category = 'history';

export function JokesByCategoryPoliticalPage() {
  const { jokes, seenJokes, loading, error } = useJokesState(category);

  const renderRandomJokesSection = () => (
    <section>
      <h1>{category} jokes </h1>
      <StyledGridContainer>
        {jokes.map((joke) => (
          <StyledGridItem key={joke.id}>
            <JokeCard joke={joke} fadeoutJoke={false} />
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
          {error ? 'Ops, somenthing went wrong with our application, try to refresh the page.' : <></>}
        </>
      )}
    </Layout>
  );
}
