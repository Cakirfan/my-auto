import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { cars } from "../helper/data";

const CarCard = ({ car }) => {
  return (
    <Card className="mb-3">
      <div className="ratio ratio-4x3">
        <Card.Img
          variant="top"
          src={car.images[0]}
          className="w-100 h-100 object-fit-cover"
        />
      </div>
      <Card.Body>
        <div className="d-flex gap-2">
          <Card.Text className="fw-semibold text-uppercase">
            {car.marke}
          </Card.Text>
          <Card.Text className="text-secondary">{car.model}</Card.Text>
        </div>

        <Card.Text className="fs-6" style={{ marginTop: "-1rem" }}>
          {car.details[6].value}
        </Card.Text>

        <div className="d-flex justify-content-between">
          <div>
            <Card.Text>{car.details[0].value}</Card.Text>
            <Card.Text>{car.details[3].value}</Card.Text>
          </div>
          <div>
            <Card.Text>{car.details[1].value}</Card.Text>
            <Card.Text>{car.details[4].value}</Card.Text>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-center fs-4 fw-semibold">
        <small className="text-muted">{car.preis} €</small>
      </Card.Footer>
    </Card>
  );
};

const LatestCars = () => {
  // Sortiere die Autos nach dem Datum (umgekehrte Reihenfolge, um die neuesten zuerst zu erhalten)
  const sortedCars = [...cars].sort(
    (a, b) => new Date(b.datum) - new Date(a.datum)
  );
  // Filtere die neuesten 8 Autos
  const latestCars = sortedCars.slice(0, 8);

  return (
    <Container className="my-5">
      <h2 className="text-center">Neueste Autos</h2>
      <hr className="text-center w-25 mx-auto mb-4" />
      <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
        {latestCars.map((car, index) => (
          <Col key={index} xl={3} lg={4} md={6} sm={12}>
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestCars;
