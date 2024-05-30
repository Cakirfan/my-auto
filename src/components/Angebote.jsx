import React, { useState } from "react";
import { Card, Row, Col, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cars } from "../helper/data";

const Angebote = () => {
  const [filters, setFilters] = useState({
    marke: "",
    model: "",
    kilometerstand: { min: "", max: "" },
    erstzulassung: { min: "", max: "" },
    preis: { min: "", max: "" },
  });

  const generateOptions = (start, end, step) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  };

  const renderTooltip = (props, text) => <Tooltip {...props}>{text}</Tooltip>;

  const cardImageStyle = {
    transition: "transform 0.3s ease",
  };

  const cardImageContainerStyle = {
    overflow: "hidden",
  };

  console.log("cars:", cars);
  const filteredCars = cars.filter((car) => {
    console.log("carsdetails:", car.details);
    const isMarkeMatch =
      filters.marke === "" || car.marke.includes(filters.marke);
    const isModellMatch =
      filters.model === "" || car.model.includes(filters.model);
    const isKilometerstandMatch =
      (filters.kilometerstand.min === "" ||
        car.kilometerstand >= filters.kilometerstand.min) &&
      (filters.kilometerstand.max === "" ||
        car.kilometerstand <= filters.kilometerstand.max);
    const isErstzulassungMatch =
      (filters.erstzulassung.min === "" ||
        car.erstzulassung >= filters.erstzulassung.min) &&
      (filters.erstzulassung.max === "" ||
        car.erstzulassung <= filters.erstzulassung.max);
    const isPreisMatch =
      (filters.preis.min === "" || car.preis >= filters.preis.min) &&
      (filters.preis.max === "" || car.preis <= filters.preis.max);

    return (
      isMarkeMatch &&
      isModellMatch &&
      isKilometerstandMatch &&
      isErstzulassungMatch &&
      isPreisMatch
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const [filterType, rangeType] = name.split("_");

    if (rangeType) {
      setFilters({
        ...filters,
        [filterType]: {
          ...filters[filterType],
          [rangeType]: value,
        },
      });
    } else {
      setFilters({ ...filters, [name]: value });
      if (name === "marke") {
        // Reset model when marke changes
        setFilters((prev) => ({ ...prev, model: "" }));
      }
    }
  };

  // Fetch models based on selected marque
  const getModelsForMarke = (marke) => {
    if (!marke) return [];
    const models = cars
      .filter((car) => car.marke === marke)
      .flatMap((car) => car.model);
    return [...new Set(models)];
  };

  // Populate model dropdown based on selected marque
  const modelOptions = filters.marke ? getModelsForMarke(filters.marke) : [];

  return (
    <div className="bg-danger-subtle mt-5 py-5">
      <h2 className="text-center">Aktuelle Fahrzeugangebote</h2>
      <hr className="text-center w-25 mx-auto mb-4" />
      <div className="container">
        <Row>
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
                          {[...new Set(cars.map((car) => car.marke))].map(
                            (marke) => (
                              <option key={marke} value={marke}>
                                {marke}
                              </option>
                            )
                          )}
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
                      <Form.Label className="fw-semibold">
                        Kilometerstand
                      </Form.Label>
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
                      <Form.Label className="fw-semibold">
                        Erstzulassung
                      </Form.Label>
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
                      <Form.Group
                        controlId="filterErstzulassungMax"
                        className="mt-2"
                      >
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

          <Col md={9}>
            <Row className="g-4">
              {filteredCars.map((car, idx) => (
                <Col
                  key={idx}
                  xs={12}
                  className="d-flex justify-content-center align-content-center"
                >
                  <Card
                    className="border border-3 shadow-lg w-100"
                    style={cardImageContainerStyle}
                  >
                    <Row noGutters>
                      <Col xs={12} sm={4}>
                        <Link to={`/details/${idx}`}>
                          <Card.Img
                            variant=""
                            src={car.images[0]}
                            height={250}
                            style={cardImageStyle}
                            className="hover-scale w-100"
                          />
                        </Link>
                      </Col>
                      <Col xs={12} sm={8}>
                        <Card.Body>
                          <Card.Title className="bg-info py-1 px-2">
                            {car.marke}
                          </Card.Title>
                          <Card.Text as="div">
                            <Row className="text-capitalize">
                              <Col md={4}>
                                {Array.isArray(car.details) &&
                                  car.details
                                    .slice(0, 2)
                                    .map((detail, index) => (
                                      <Col key={index}>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={renderTooltip(
                                            null,
                                            detail.label
                                          )}
                                        >
                                          <small
                                            style={{ cursor: "pointer" }}
                                            className="d-flex flex-column text-center my-3"
                                          >
                                            <FontAwesomeIcon
                                              icon={detail.icon}
                                            />{" "}
                                            <span className="text-capitalize">
                                              {detail.label}
                                            </span>
                                          </small>
                                        </OverlayTrigger>
                                      </Col>
                                    ))}
                              </Col>
                              <Col md={4}>
                                {Array.isArray(car.details) &&
                                  car.details
                                    .slice(2, 4)
                                    .map((detail, index) => (
                                      <Col key={index}>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={renderTooltip(
                                            null,
                                            detail.label
                                          )}
                                        >
                                          <small
                                            style={{ cursor: "pointer" }}
                                            className="d-flex flex-column text-center my-3"
                                          >
                                            <FontAwesomeIcon
                                              icon={detail.icon}
                                            />{" "}
                                            {detail.label}
                                          </small>
                                        </OverlayTrigger>
                                      </Col>
                                    ))}
                              </Col>
                              <Col md={4}>
                                {Array.isArray(car.details) &&
                                  car.details
                                    .slice(4, 6)
                                    .map((detail, index) => (
                                      <Col key={index}>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={renderTooltip(
                                            null,
                                            detail.label
                                          )}
                                        >
                                          <small
                                            style={{ cursor: "pointer" }}
                                            className="d-flex flex-column text-center my-3"
                                          >
                                            <FontAwesomeIcon
                                              icon={detail.icon}
                                            />{" "}
                                            {detail.label}
                                          </small>
                                        </OverlayTrigger>
                                      </Col>
                                    ))}
                              </Col>
                            </Row>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <Button
                            variant="link"
                            className="text-decoration-none bg-dark-subtle w-100"
                            as={Link}
                            to={`/details/${idx}`}
                          >
                            Verbrauchsdaten
                          </Button>
                        </Card.Footer>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Angebote;
