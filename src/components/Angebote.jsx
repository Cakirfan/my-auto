import { Card, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import cards from "../helper/data";

const Angebote = () => {
  const renderTooltip = (props, text) => <Tooltip {...props}>{text}</Tooltip>;

  const cardImageStyle = {
    transition: "transform 0.3s ease",
  };

  const cardImageContainerStyle = {
    overflow: "hidden",
  };

  return (
    <div className="bg-danger-subtle my-5 py-5">
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center">Aktuelle Fahrzeugangebote</h2>
        <hr className="text-center w-25" />

        <Row className="g-4">
          {cards.map((card, idx) => (
            <Col
              key={idx}
              className="d-flex justify-content-center align-content-center"
            >
              <Card
                className="border border-3 shadow-lg"
                style={{ width: "28rem" }}
              >
                <div style={cardImageContainerStyle}>
                  <Link to={`/details/${idx}`}>
                    <Card.Img
                      variant="top"
                      src={card.img}
                      height={250}
                      style={cardImageStyle}
                      className="hover-scale"
                    />
                  </Link>
                </div>
                <Card.Body>
                  <Card.Title className="bg-info py-1 px-2">
                    {card.name}
                  </Card.Title>
                  <Card.Text as="div">
                    <Row>
                      <Col>
                        {card.details.slice(0, 3).map((detail, index) => (
                          <div key={index} className="mb-2">
                            <OverlayTrigger
                              placement="top"
                              overlay={renderTooltip(null, detail.label)}
                            >
                              <small
                                style={{ cursor: "pointer" }}
                                className="d-flex flex-column text-center my-3"
                              >
                                <FontAwesomeIcon icon={detail.icon} />{" "}
                                {detail.label}
                              </small>
                            </OverlayTrigger>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        {card.details.slice(3, 6).map((detail, index) => (
                          <div key={index} className="mb-2">
                            <OverlayTrigger
                              placement="top"
                              overlay={renderTooltip(null, detail.label)}
                            >
                              <small
                                style={{ cursor: "pointer" }}
                                className="d-flex flex-column text-center my-3"
                              >
                                <FontAwesomeIcon icon={detail.icon} />{" "}
                                {detail.label}
                              </small>
                            </OverlayTrigger>
                          </div>
                        ))}
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    {card.features.map((featurePair, index) => (
                      <Col key={index} className="d-flex flex-wrap">
                        {featurePair.map((feature, idx) => (
                          <small key={idx} className="me-2">
                            {feature}
                          </small>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </Card.Footer>
                <Button
                  variant="link"
                  className="text-decoration-none bg-dark-subtle"
                  as={Link}
                  to={`/details/${idx}`}
                >
                  Verbrauchsdaten
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Angebote;
