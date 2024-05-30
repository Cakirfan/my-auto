import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { cars } from "../../helper/data";
import { useState } from "react";
import DetailSection from "./core/DetailSection";
import FeatureSection from "./core/FeatureSection";
import ImageSlider from "./core/ImageSlider";
import SozialeMedien from "../../components/SozialeMedien";
import Equipment from "./core/Equipment";

const AutoDetail = () => {
  const { id } = useParams();
  const car = cars[id];
  const [selectedImage, setSelectedImage] = useState(car.images[0]);

  return (
    <div className="container-fluid bg-secondary-subtle pb-1">
      <Container className="py-2">
        <Link to="/" className="btn btn-primary mb-3">
          zur Angebote
        </Link>
        <section>
          <div className="d-flex justify-content-between">
            <h3 className="text-uppercase">
              <span>{car.marke}</span> -{" "}
              <span className=" text-secondary">{car.model}</span>
            </h3>
            <SozialeMedien />
          </div>

          <hr />
          <Row className="mt-4">
            <Col
              md={3}
              className="bg-white p-3 rounded rounded-2 shadow-lg mb-2"
              style={{ height: "36rem" }}
            >
              <DetailSection details={car.details} car={car} />
            </Col>
            <Col md={6} className="mb-2" style={{ height: "35rem" }}>
              <ImageSlider
                images={car.images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </Col>
            <Col
              md={3}
              className="bg-white p-3 rounded rounded-2 shadow-lg"
              style={{ height: "36rem" }}
            >
              <FeatureSection features={car.features} />
            </Col>
          </Row>
        </section>
      </Container>
      <section>
        <Equipment details={car.equipment} />
      </section>
    </div>
  );
};

export default AutoDetail;
