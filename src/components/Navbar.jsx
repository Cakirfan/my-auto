import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const myNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-success fixed-top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/01/11/passenger-car-155267_640.png"
              alt=""
              width={100}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav bg-danger">
          <Nav className="ms-auto d-flex gap-3">
            <Nav.Link>
              <Link
                to="/"
                className="text-white fw-semibold"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                START
              </Link>
            </Nav.Link>
            <NavDropdown title="FAHRZEUGE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">GEWERBEKUNDEN</Nav.Link>
            <NavDropdown title="SERVICE & ZUBEHÖR" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="UNTERNEHMEN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Über Uns</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Karriere</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link
                to="kontakt"
                className="text-white fw-semibold"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                KONTAKT
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default myNavbar;
