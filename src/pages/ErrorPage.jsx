import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1 className="display-1 text-danger mb-3">Error</h1>
          <h2>Something went wrong</h2>
          <p>
            We are experiencing technical difficulties. Please try again later.
          </p>
          <Button as={Link} to="/" variant="primary" className="my-4">
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
