import { Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import './cardCategory.css';

export const CardsCategory = () => {
  let navigation = useNavigation();
  const {categories} = useLoaderData();
   return (
    <Container className="mt-4">
    {navigation === 'loading' ? (
      <Container className="d-flex justify-content-center align-items-center mt-4">
        <Spinner variant='success' />
      </Container>
    ) : (
      <>
        <Row className="text-center text-success mb-4">
        </Row>
        <Row className="d-flex justify-content-center">
          {categories.map((category, index) => (
            <Col key={index} xs={12} md={3}  className="d-flex justify-content-center mb-4">
              <Card style={{ width: "12rem", borderRadius: '1rem' }} className="border-0 card-hover">
                <Link to={`/products/${category.title}`}>
                  <Card.Img className="p-4" style={{ height: '12rem', objectFit: 'contain' }} variant="top" src={category.image} alt={category.title} />
                </Link>
                <hr style={{ width: '80%', margin: 'auto' }} />
                <Card.Body>
                  <Card.Title className="text-center">{category.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )}
  </Container>
  );
}
