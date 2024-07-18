import {  faCartShopping,} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Cart } from "../Cart/Cart"
import {useState } from "react"

export const Header = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg="dark">
      <Container>
        <Link className="text-danger navbar-brand fs-3" to={'/'}>Tienda <span className="text-warning">Fake</span></Link>
        {
          sessionStorage.token
          &&
          <Nav className="mx-auto">
            <Link className="nav-link" onClick={handleShow}>
              <FontAwesomeIcon icon={faCartShopping} size="2x" className="text-warning" />
            </Link>
          </Nav>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            sessionStorage.token 
            ?
            <Nav className="ms-auto">
              <Link className="nav-link" to={'#'}>Logout</Link>
            </Nav>
            :
            <Nav className="ms-auto">
              <Link className="nav-link" to={'/login'}>Login</Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
      <Cart show={show} handleClose={handleClose}  />
    </Navbar>
  )
}
