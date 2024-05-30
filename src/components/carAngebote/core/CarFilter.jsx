import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { cars } from "../../../helper/data";

const CarFilter = ({ filters, handleFilterChange, modelOptions }) => {

  const generateOptions = (start, end, step) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  };
  
  return (
    <Col md={3}>
      <div className="bg-white rounded rounded-2 shadow-lg py-3">
        <h2 className="ms-2 px-3">Filtern nach</h2>
        <hr className="mb-5" />
        <Form>
          <Container>
            <Row className="d-flex flex-column px-2">
              <Col>
                <Form.Group controlId="filterMarke">
                  <Form.Label className="fw-semibold">Marke</Form.Label>
                  <Form.Control
                    as="select"
                    name="marke"
                    value={filters.marke}
                    onChange={handleFilterChange}
                  >
                    <option value="">Marke auswählen</option>
                    {[...new Set(cars.map((car) => car.marke))].map((marke) => (
                      <option key={marke} value={marke}>
                        {marke}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="mt-3">
                <Form.Group controlId="filterModell">
                  <Form.Label className="fw-semibold">Modell</Form.Label>
                  <Form.Control
                    as="select"
                    name="model"
                    value={filters.model}
                    onChange={handleFilterChange}
                    disabled={!filters.marke}
                  >
                    <option value="">Modell auswählen</option>
                    {modelOptions.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="mt-3">
                <Form.Label className="fw-semibold">Kilometerstand</Form.Label>
                <Form.Group controlId="filterKilometerstandMin">
                  <Form.Control
                    as="select"
                    name="kilometerstand_min"
                    value={filters.kilometerstand.min}
                    onChange={handleFilterChange}
                  >
                    <option value="">Min. Kilometer</option>
                    {generateOptions(0, 150000, 2500).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  controlId="filterKilometerstandMax"
                  className="mt-2"
                >
                  <Form.Control
                    as="select"
                    name="kilometerstand_max"
                    value={filters.kilometerstand.max}
                    onChange={handleFilterChange}
                  >
                    <option value="">Max. Kilometer</option>
                    {generateOptions(0, 150000, 2500).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="mt-3">
                <Form.Label className="fw-semibold">Erstzulassung</Form.Label>
                <Form.Group controlId="filterErstzulassungMin">
                  <Form.Control
                    as="select"
                    name="erstzulassung_min"
                    value={filters.erstzulassung.min}
                    onChange={handleFilterChange}
                  >
                    <option value="">Min. Jahr</option>
                    {generateOptions(2000, 2024, 1).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="filterErstzulassungMax" className="mt-2">
                  <Form.Control
                    as="select"
                    name="erstzulassung_max"
                    value={filters.erstzulassung.max}
                    onChange={handleFilterChange}
                  >
                    <option value="">Max. Jahr</option>
                    {generateOptions(2000, 2024, 1).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="mt-3">
                <Form.Label className="fw-semibold">Preis</Form.Label>
                <Form.Group controlId="filterPreisMin">
                  <Form.Control
                    as="select"
                    name="preis_min"
                    value={filters.preis.min}
                    onChange={handleFilterChange}
                  >
                    <option value="">Min. Preis</option>
                    {generateOptions(0, 50000, 5000).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="filterPreisMax" className="mt-2">
                  <Form.Control
                    as="select"
                    name="preis_max"
                    value={filters.preis.max}
                    onChange={handleFilterChange}
                  >
                    <option value="">Max. Preis</option>
                    {generateOptions(0, 50000, 5000).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </Col>
  );
};

export default CarFilter;
