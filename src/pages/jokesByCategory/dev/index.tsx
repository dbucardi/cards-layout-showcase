import { Col, Row } from "../../../components/GridSystem";
import { Layout } from "../../../Layout";
import { Spinner } from "../../../components/Spinner";
import { useJokesState } from "../../../state/jokesState";
import { JokeCard } from "../../../components/JokeCard";

export function JokesByCategoryDevPage() {
  const { jokes, loading } = useJokesState("dev");

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          {jokes.map((joke) => (
            <Col key={joke.id} sm={12} md={6} lg={4}>
              <JokeCard joke={joke.value} />
            </Col>
          ))}
        </Row>
      )}
    </Layout>
  );
}
