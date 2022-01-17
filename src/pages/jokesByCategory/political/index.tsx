import { Col, Row } from "../../../components/GridSystem";
import { Layout } from "../../../Layout";
import { Spinner } from "../../../components/Spinner";
import { useJokesState } from "../../../state/jokesState";

export function JokesByCategoryPoliticalPage() {
  const { jokes, loading } = useJokesState("political");

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          {jokes.map((joke) => (
            <Col key={joke.id} sm={12} md={6} lg={4}>
              <span>{joke.value}</span>
            </Col>
          ))}
        </Row>
      )}
    </Layout>
  );
}
