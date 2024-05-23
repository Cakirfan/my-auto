import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const FahrzeugSuchen = () => {
  return (
    <div className="container responsive-container my-5">
      <h1 className="p-3">Such Lieblingsfahzeug</h1>
      <Form>
        <div className="card">
          <Row className="p-4">
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Select aria-label="Anrede select">
                  <option value="">Hersteller wählen</option>
                  <option value="">Audi</option>
                  <option value="">Ford</option>
                  <option value="">Mercedes</option>
                  <option value="">Opel</option>
                  <option value="">Porsch</option>
                  <option value="">Renault</option>
                  <option value="">Volkwagen</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Select aria-label="Anrede select">
                  <option value="">Kilometerstand bis</option>
                  <option value="">0 km</option>
                  <option value="">1000 km</option>
                  <option value="">2000 km</option>
                  <option value="">3000 km</option>
                  <option value="">4000 km</option>
                  <option value="">5000 km</option>
                  <option value="">6000 km</option>
                  <option value="">7000 km</option>
                  <option value="">8000 km</option>
                  <option value="">9000 km</option>
                  <option value="">10000 km</option>
                  <option value="">20000 km</option>
                  <option value="">30000 km</option>
                  <option value="">40000 km</option>
                  <option value="">50000 km</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Select aria-label="Anrede select">
                  <option value="">Modell wählen</option>
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                  <option value="">D</option>
                  <option value="">E</option>
                  <option value="">F</option>
                  <option value="">G</option>
                  <option value="">H</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Select aria-label="Anrede select">
                  <option value="">Kraftstoff wählen</option>
                  <option value="benzin">Benzin</option>
                  <option value="diesel">Diesel</option>
                  <option value="elektro">Elektro</option>
                  <option value="hybrid">Hybrid</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Select aria-label="Anrede select">
                  <option value="">Preis bis</option>
                  <option value="">1000. - €</option>
                  <option value="">5000. - €</option>
                  <option value="">10000. - €</option>
                  <option value="">15000. - €</option>
                  <option value="">20000. - €</option>
                  <option value="">30000. - €</option>
                  <option value="">45000. - €</option>
                  <option value="">60000. - €</option>
                  <option value="">75000. - €</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Select aria-label="Anrede select">
                  <option value="">---</option>
                  <option value="herr">Herr</option>
                  <option value="frau">Frau</option>
                  <option value="divers">Divers</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Select aria-label="Anrede select">
                  <option value="">Erstzulassung von</option>
                  <option value="">2024</option>
                  <option value="">2023</option>
                  <option value="">2022</option>
                  <option value="">2021</option>
                  <option value="">2020</option>
                  <option value="">2019</option>
                  <option value="">2018</option>
                  <option value="">2017</option>
                  <option value="">2016</option>
                  <option value="">2015</option>
                  <option value="">2014</option>
                  <option value="">2013</option>
                  <option value="">2012</option>
                  <option value="">2011</option>
                  <option value="">2010</option>
                  <option value="">2009</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Button className="btn-dark w-100 fw-semibold">
                  ...Treffer
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default FahrzeugSuchen;
