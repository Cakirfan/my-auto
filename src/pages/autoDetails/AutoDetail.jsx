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
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <h3 className="text-uppercase">
              <span>{car.marke}</span> -{" "}
              <span className=" text-secondary">{car.model}</span>
            </h3>
            <SozialeMedien />
          </div>

          <hr />
          <Row className="mt-4 d-flex flex-wrap align-content-center justify-content-center">
            <Col
              md={12}
              lg={3}
              className="bg-white mt-2 mt-lg-0 p-3 rounded rounded-2 mb-2 order-2 order-md-2 order-lg-1"
              style={{ height: "35rem" }}
            >
              <DetailSection details={car.details} car={car} />
            </Col>
            <Col
              md={12}
              lg={6}
              className="mb-5 mb-lg-2 order-1 order-md-1 order-lg-2 custom-image-slider-height"
            >
              <ImageSlider
                images={car.images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </Col>
            <Col
              md={12}
              lg={3}
              className="bg-white mt-2 mt-lg-0 ms- p-3 rounded rounded-2 order-3 order-md-3 order-lg-3"
              style={{ height: "35rem" }}
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
