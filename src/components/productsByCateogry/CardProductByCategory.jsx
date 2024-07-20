import { Link, useLoaderData, useNavigation, useParams } from "react-router-dom"
import { Card, CardBody,Container, Row, Spinner } from "react-bootstrap";

export const CardProductByCategory = () => {
    let navigation = useNavigation();
    const { products } = useLoaderData();
    const {category} = useParams();
  return (
    <Container className="mt-4">
    {navigation === "loading" ? (
      <Container className="d-flex justify-content-center align-items-center mt-4">
        <Spinner variant="success" />
      </Container>
    ) : (
      <Container>
        <h2 className=" mt-3 mb-4"style={{ color: "grey"}}>{`${category}`}</h2>
        <Row className="d-flex justify-content-center align-items-center gap-4">
      {products.map((product) => (
        <Card key={product.id} style={{ width: "22rem", borderRadius: '1rem' }} className="border-0 card-hover">
          <Link to={`/product/${product.id}`}>
            <Card.Img className="p-4" style={{ height: '12rem', objectFit: 'contain' }} variant="top" src={product.image} alt={product.title} />
          </Link>
          <hr style={{ width: '100%', margin: 'auto' }} />
          <CardBody>
            <Card.Text>{product.title}</Card.Text>
            <div className="mt-3" style={{height:'5rem'}}>
              <small style={{ color: "grey", textDecoration: "line-through" }}>
                Desde: ${`${((product.price + (product.price * 0.15)).toFixed(2))}`}
              </small>
              <h4>{`$${product.price}`}</h4>
              <small className="text-success">15%OFF</small>
            </div>
          </CardBody>
        </Card>

      ))}
    </Row>
      </Container>
    )}
  </Container>
  )
}
