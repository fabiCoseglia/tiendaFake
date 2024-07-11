import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg="dark">
      <Container>
        <Link className="text-danger navbar-brand fs-3" to={'/'}>Tienda <span className="text-warning">Fake</span></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to={'/login'}>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
