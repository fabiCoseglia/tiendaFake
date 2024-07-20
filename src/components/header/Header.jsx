import {  faCartShopping,} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { Cart } from "../Cart/Cart"
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import Swal from "sweetalert2"

export const Header = () => {
  const [show, setShow] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate('/')
    return Swal.fire({
      text: "you have logged out",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  
  return (
<Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="text-success navbar-brand fs-3" to={'/'}>
          Tienda <span className="text-warning">Fake</span>
        </Link>
        {isLoggedIn && (
          <Nav className="d-lg-none">
            <Link className="nav-link" onClick={handleShow}>
              <FontAwesomeIcon icon={faCartShopping} style={{fontSize:'1.5rem'}} className="text-warning" />
            </Link>
          </Nav>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            {isLoggedIn && (
              <Link className="nav-link d-none d-lg-block" onClick={handleShow}>
                <FontAwesomeIcon icon={faCartShopping} style={{fontSize:'1.5rem'}} className="text-warning" />
              </Link>
            )}
            {isLoggedIn ? (
              <Link className="nav-link ms-2" onClick={handleLogout}>Logout</Link>
            ) : (
              <Link className="nav-link ms-2" to={'/login'}>Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Cart show={show} handleClose={handleClose} />
    </Navbar>

  )
}
