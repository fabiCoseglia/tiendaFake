import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import './detailProduct.css'
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const DetailProduct = () => {
  let navigation = useNavigation();
  const { product } = useLoaderData();

  //cart context
  const {addToCart} = useContext(CartContext)
  const handleAddToCart = () =>{
    addToCart(product)
  }

  return (
    <Container className="product-detail mt-5">
      {navigation === "loading" ? (
        <Container className="d-flex justify-content-center align-items-center mt-4">
          <Spinner variant="success" />
        </Container>
      ) : (
        <Row>
          <Col md={6} className="product-image d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </Col>

          <Col md={6} className="product-info">
            <h2>{product.title}</h2>
            <small style={{ color: "grey", textDecoration: "line-through" }}>
              Desde: ${`${(product.price + product.price * 0.15).toFixed(2)}`}
            </small>
            <h4 className="text-success">{`$${product.price}`}</h4>
            <small className="text-danger">15%OFF</small>
            <p className="mt-4">{product.description}</p>
            <Link className="btn btn-primary mt-4"onClick={handleAddToCart}>Añadir al carrito</Link>
          </Col>
        </Row>
      )}
    </Container>
  );
}
