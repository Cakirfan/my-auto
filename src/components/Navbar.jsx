import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="fixed-top"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2013/11/08/17/58/cirrus-clouds-207534_640.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/01/11/passenger-car-155267_640.png"
              alt="Brand Logo"
              width={100}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <Nav.Link>
              <Link
                to="angebote"
                className="text-white fw-semibold"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                FAHRZEUGE
              </Link>
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              GEWERBEKUNDEN
            </Nav.Link>
            <NavDropdown
              title="SERVICE & ZUBEHÖR"
              id="basic-nav-dropdown"
              className="text-white"
            >
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
            <NavDropdown
              title="UNTERNEHMEN"
              id="basic-nav-dropdown"
              className="text-white"
            >
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

export default MyNavbar;
