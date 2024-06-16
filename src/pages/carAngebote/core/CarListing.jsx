import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  CardTitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faEnvelope,
  faShareAlt,
  faBars,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { OverlayTrigger } from "react-bootstrap";

const CarListing = ({ filteredCars, renderTooltip }) => {
  const [popup, setPopup] = useState({ show: false, x: 0, y: 0, carIdx: null });
  const popupRef = useRef(null);
  const [layout, setLayout] = useState("horizontal");
  const [itemsToShow, setItemsToShow] = useState(10);
  const [sortOption, setSortOption] = useState("default");

  const handleShowPopup = (event, idx) => {
    const rect = event.target.getBoundingClientRect();
    setPopup({
      show: true,
      x: rect.x + window.scrollX,
      y: rect.y + window.scrollY,
      carIdx: idx,
    });
  };

  const handleClosePopup = () =>
    setPopup({ show: false, x: 0, y: 0, carIdx: null });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    if (popup.show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup.show]);

  const cardImageStyle = {
    transition: "transform 0.3s ease",
  };

  const cardImageContainerStyle = {
    overflow: "hidden",
  };

  const handleShare = (link) => {
    if (link === "copy") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link kopiert!");
      });
    } else {
      window.open(link, "_blank");
    }
    handleClosePopup();
  };

  const getDetailValue = (details, label) => {
    const detail = details.find((detail) => detail.label === label);
    return detail ? detail.value : null;
  };

  const convertPrice = (price) => parseFloat(price.replace(/[^0-9.-]+/g, ""));

  const convertKilometers = (km) => parseFloat(km.replace(/[^0-9.-]+/g, ""));

  const sortCars = (cars, option) => {
    switch (option) {
      case "priceAsc":
        return cars.sort(
          (a, b) => convertPrice(a.preis) - convertPrice(b.preis)
        );
      case "priceDesc":
        return cars.sort(
          (a, b) => convertPrice(b.preis) - convertPrice(a.preis)
        );
      case "yearAsc":
        return cars.sort((a, b) => new Date(a.datum) - new Date(b.datum));
      case "yearDesc":
        return cars.sort((a, b) => new Date(b.datum) - new Date(a.datum));
      case "kmAsc":
        return cars.sort(
          (a, b) =>
            convertKilometers(getDetailValue(a.details, "kilometerstand")) -
            convertKilometers(getDetailValue(b.details, "kilometerstand"))
        );
      case "kmDesc":
        return cars.sort(
          (a, b) =>
            convertKilometers(getDetailValue(b.details, "kilometerstand")) -
            convertKilometers(getDetailValue(a.details, "kilometerstand"))
        );
      default:
        return cars;
    }
  };

  const sortedCars = sortCars([...filteredCars], sortOption).slice(
    0,
    itemsToShow
  );

  return (
    <>
      <Col md={9}>
        <Row className="mb-3">
          <Col className="col-3 my-auto fs-4 fw-semibold">
            <span>Filter</span>
          </Col>

          <Col className="d-flex justify-content-end gap-2">
            <ButtonGroup>
              <Button
                variant={layout === "horizontal" ? "primary" : "secondary"}
                onClick={() => setLayout("horizontal")}
              >
                <FontAwesomeIcon icon={faBars} /> Horizontal
              </Button>
              <Button
                variant={layout === "vertical" ? "primary" : "secondary"}
                onClick={() => setLayout("vertical")}
              >
                <FontAwesomeIcon icon={faThLarge} /> Vertikal
              </Button>
            </ButtonGroup>
            <DropdownButton
              id="dropdown-basic-button"
              title={`Zeige ${itemsToShow}`}
            >
              {[10, 20, 30].map((number) => (
                <Dropdown.Item
                  key={number}
                  onClick={() => setItemsToShow(number)}
                >
                  {number}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              title="Erweiterte Filterung"
            >
              <Dropdown.Item onClick={() => setSortOption("priceAsc")}>
                Preis: aufsteigend
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortOption("priceDesc")}>
                Preis: absteigend
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortOption("yearAsc")}>
                Modelljahr: aufsteigend
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortOption("yearDesc")}>
                Modelljahr: absteigend
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortOption("kmAsc")}>
                KM: aufsteigend
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortOption("kmDesc")}>
                KM: absteigend
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row
          className={`g-4 ${
            layout === "horizontal" ? "flex-row" : "flex-column"
          }`}
        >
          {sortedCars.map((car, idx) => (
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
                      <Card.Title className="bg-info py-1 px-2 d-flex justify-content-between align-items-center">
                        <div>
                          <span>{car.marke}</span> -{" "}
                          <span className="text-secondary fs-6">
                            {car.model}
                          </span>
                        </div>
                        <Button
                          variant="link"
                          className="text-decoration-none text-danger"
                          onClick={(event) => handleShowPopup(event, idx)}
                        >
                          <FontAwesomeIcon icon={faShareAlt} /> Teilen
                        </Button>
                      </Card.Title>
                      <Card.Text as="div">
                        <Row className="text-capitalize">
                          <Col md={4}>
                            {Array.isArray(car.details) &&
                              car.details.slice(0, 2).map((detail, index) => (
                                <Col key={index}>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={renderTooltip(null, detail.label)}
                                  >
                                    <small
                                      style={{ cursor: "pointer" }}
                                      className="d-flex flex-column text-center my-3"
                                    >
                                      <FontAwesomeIcon icon={detail.icon} />{" "}
                                      <span className="text-capitalize">
                                        {detail.value}
                                      </span>
                                    </small>
                                  </OverlayTrigger>
                                </Col>
                              ))}
                          </Col>
                          <Col md={4}>
                            {Array.isArray(car.details) &&
                              car.details.slice(2, 4).map((detail, index) => (
                                <Col key={index}>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={renderTooltip(null, detail.label)}
                                  >
                                    <small
                                      style={{ cursor: "pointer" }}
                                      className="d-flex flex-column text-center my-3"
                                    >
                                      <FontAwesomeIcon icon={detail.icon} />{" "}
                                      {detail.value}
                                    </small>
                                  </OverlayTrigger>
                                </Col>
                              ))}
                          </Col>
                          <Col md={4}>
                            {Array.isArray(car.details) &&
                              car.details.slice(4, 6).map((detail, index) => (
                                <Col key={index}>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={renderTooltip(null, detail.label)}
                                  >
                                    <small
                                      style={{ cursor: "pointer" }}
                                      className="d-flex flex-column text-center my-3"
                                    >
                                      <FontAwesomeIcon icon={detail.icon} />{" "}
                                      {detail.value}
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

      {popup.show && (
        <div
          ref={popupRef}
          style={{
            position: "absolute",
            top: popup.y + 43,
            left: popup.x - 113,
            width: "13rem",
            background: "white",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
          className="rounded rounded-2 shadow-lg"
        >
          <div className="d-flex justify-content-between align-items-center p-1 border-bottom">
            <strong className="py-2">Angebote teilen</strong>
            <Button
              variant="close"
              onClick={handleClosePopup}
              aria-label="Close"
              className="text-secondary"
            />
          </div>
          <div className="py-2">
            {[
              {
                label: "Email",
                icon: faEnvelope,
                url: "mailto:?subject=Check out this car&body=Check out this car: ",
                className: "bg-secondary text-white p-2 rounded rounded-circle",
              },
              {
                label: "WhatsApp",
                icon: faWhatsapp,
                url: "https://wa.me/?text=Check out this car: ",
                className: "bg-success text-white p-2 rounded rounded-circle",
              },
              {
                label: "Facebook",
                icon: faFacebook,
                url: "https://www.facebook.com/sharer/sharer.php?u=",
                className: "bg-primary text-white p-2 rounded rounded-circle",
              },
              {
                label: "Twitter",
                icon: faTwitter,
                url: "https://twitter.com/intent/tweet?url=",
                className: "bg-info text-white p-2 rounded rounded-circle",
              },
              {
                label: "Link kopieren",
                icon: faCopy,
                url: "copy",
                className: "bg-secondary text-white p-2 rounded rounded-circle",
              },
            ].map((link, index) => (
              <Button
                key={index}
                variant="link"
                onClick={() =>
                  handleShare(
                    link.url === "copy"
                      ? "copy"
                      : link.url + filteredCars[popup.carIdx]?.images[0]
                  )
                }
                className="text-decoration-none d-flex align-items-center gap-2"
              >
                <FontAwesomeIcon icon={link.icon} className={link.className} />
                <span className="text-secondary">{link.label}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CarListing;
