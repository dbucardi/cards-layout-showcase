import { Link } from "react-router-dom";
import { Col, Row } from "../../components/GridSystem";
import { Layout } from "../../Layout";
import { JokeCategoryCard } from "../../components/JokeCategoryCard";
import { categoriesData } from "./categories";

export function HomePage() {
  return (
    <Layout>
      <Row>
        {categoriesData?.map((cardProps, index) => (
          <Col key={cardProps.category} sm={12} md={6} lg={4}>
            <Link to={`/jokes/${cardProps.category}`}>
              <JokeCategoryCard {...cardProps} />
            </Link>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
