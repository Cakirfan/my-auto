import React from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBuilding,
  faChartArea,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import "../../../App.css";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Soziale Medien
  </Tooltip>
);

const unternehmen = [
  "Über uns",
  "Wer wir sind",
  "Karriere",
  "Datenschutz",
  "Unsere Partner",
];

const leistungen = [
  "Ich möchte ein Auto kaufen",
  "Ich möchte mein Auto verkaufen",
  "Ich möchte tauschen",
  "Versicherungsdienste",
  "Wertschutz für Autos",
  "Kilometergarantie",
  "Motormechanikgarantie",
];

const Footer = () => {
  return (
    <footer className="border-top border-4 border-success shadow-lg bg-dark-subtle pt-5">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={4} className="mb-3">
            <div>
            <div className="d-flex gap-3">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/13/01/11/passenger-car-155267_640.png"
                alt="Logo"
                height={50}
                className=""
              />
              <h2 className="my-auto">My Auto</h2>
            </div>
              
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis adipisci nulla, incidunt illum magnam eligendi! Maxime
                eligendi enim id error soluta corrupti maiores. Aperiam eveniet
                adipisci mollitia expedita error, beatae officia illum tempore
                nulla numquam saepe voluptatum repellendus. Odit blanditiis
                itaque asperiores autem eaque ut soluta beatae accusamus cum
                quos.
              </p>
              <div>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <a href="#" className="me-3">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <a href="#" className="me-3">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} lg={2} className="mb-3">
            <h6 className="mb-4 text-uppercase fw-bolder shadow-sm">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-primary me-2"
              />
              Unternehmen
            </h6>
            <ul className="list-unstyled">
              {unternehmen.map((item, idx) => (
                <li key={idx}>
                  <a href="#">
                    <FontAwesomeIcon icon={faArrowRight} className="me-2" />{" "}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={12} md={4} lg={3} className="mb-3">
            <h6 className="mb-4 text-uppercase fw-bolder shadow-sm">
              <FontAwesomeIcon
                icon={faChartArea}
                className="text-primary me-2"
              />
              Unsere Dienstleistungen
            </h6>
            <ul className="list-unstyled">
              {leistungen.map((item, idx) => (
                <li key={idx}>
                  <a href="#">
                    <FontAwesomeIcon icon={faArrowRight} className="me-2" />{" "}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={12} md={4} lg={3} className="mb-3">
            <h6 className="mb-4 text-uppercase fw-bolder shadow-sm">
              <FontAwesomeIcon
                icon={faFileContract}
                className="text-primary me-2"
              />
              Kontakt
            </h6>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2" /> Rufen Sie uns
              an: <strong>+49 123 000 0000</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email:{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />{" "}
              Adresse: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />{" "}
              Adresse-2: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
