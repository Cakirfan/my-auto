import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">404</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Button as={Link} to="/" variant="primary">
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
