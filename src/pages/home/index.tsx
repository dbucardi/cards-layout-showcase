import { Link } from 'react-router-dom';
import { Col, Row } from '../../components/GridSystem';
import { Layout } from '../../components/Layout';
import { JokeCategoryCard } from '../../components/JokeCategoryCard';
import { categoriesData } from './categories';

export function HomePage() {
  return (
    <Layout>
      <section>
        <h1>Welcome! Choose your card!</h1>
        <Row>
          {categoriesData?.map((cardProps, index) => (
            <Col key={cardProps.category} sm={100} md={50} lg={33}>
              <Link to={`/jokes/${cardProps.category}`}>
                <JokeCategoryCard {...cardProps} />
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </Layout>
  );
}
