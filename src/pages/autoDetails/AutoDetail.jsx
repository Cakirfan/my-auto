import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import cards  from "../../helper/data";
import { useState } from "react";
import DetailSection from "./core/DetailSection";
import FeatureSection from "./core/FeatureSection";
import ImageSlider from "./core/ImageSlider";

const AutoDetail = () => {
  const { id } = useParams();
  const card = cards[id];
  const [selectedImage, setSelectedImage] = useState(card.images[0]);

  return (
    <div className="container-fluid bg-secondary-subtle pb-1">
      <Container className="py-2">
        <Link to="/" className="btn btn-primary mb-3">
          zur Angebote
        </Link>
        <div>
          <h3 className="text-uppercase text-secondary">{card.name}</h3>
          <hr />
          <Row className="my-4">
            <Col
              md={3}
              className="bg-white p-3 rounded rounded-2 shadow-lg mb-2"
              style={{ height: "36rem" }}
            >
              <DetailSection details={card.details} />
            </Col>
            <Col md={6} className="mb-2" style={{ height: "35rem" }}>
              <ImageSlider
                images={card.images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </Col>
            <Col
              md={3}
              className="bg-white p-3 rounded rounded-2 shadow-lg"
              style={{ height: "36rem" }}
            >
              <FeatureSection features={card.features} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AutoDetail;
