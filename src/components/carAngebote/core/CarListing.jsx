import React, { useState, useEffect, useRef } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faEnvelope,
  faShareAlt,
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

  const shareLinks = [
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
  ];

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

  return (
    <>
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
                      <Card.Title className="bg-info py-1 px-2 d-flex justify-content-between align-items-center">
                        {car.marke}
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
          className="rounded rounded-2"
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
            {shareLinks.map((link, index) => (
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
