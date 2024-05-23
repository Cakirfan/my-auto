import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const KontaktForm = () => {
  return (
    <div className="container responsive-container my-5">
      <Form>
        <div className="card border-3 border-primary shadow-lg">
          <div className="bg-secondary-subtle border-bottom border-3 border-primary">
            <h3 className="p-3">Ihre Persönlichen Angaben</h3>
          </div>
          <Row className="p-3">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formAnrede">
                <Form.Label className="fw-semibold">Anrede</Form.Label>
                <Form.Select aria-label="Anrede select">
                  <option value="">---</option>
                  <option value="herr">Herr</option>
                  <option value="frau">Frau</option>
                  <option value="divers">Divers</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formVorname">
                <Form.Label className="fw-semibold">Vorname</Form.Label>
                <Form.Control type="text" placeholder="Vorname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formStrasse">
                <Form.Label className="fw-semibold">Straße</Form.Label>
                <Form.Control type="text" placeholder="Straße" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPLZ">
                <Form.Label className="fw-semibold">PLZ</Form.Label>
                <Form.Control type="text" placeholder="PLZ" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTelefonnummer">
                <Form.Label className="fw-semibold">Telefonnummer</Form.Label>
                <Form.Control type="tel" placeholder="Telefonnummer" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formFirma">
                <Form.Label className="fw-semibold">Firma</Form.Label>
                <Form.Control type="text" placeholder="Firma" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-semibold">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formHausnummer">
                <Form.Label className="fw-semibold">Hausnummer</Form.Label>
                <Form.Control type="text" placeholder="Hausnummer" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formOrt">
                <Form.Label className="fw-semibold">Ort</Form.Label>
                <Form.Control type="text" placeholder="Ort" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold">
                  E-Mail Adresse <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-Mail Adresse"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div className="card border-3 border-primary mt-3 shadow-lg">
          <div className="bg-secondary-subtle border-bottom border-3 border-primary">
            <h3 className="p-3">Ihre Nachricht an uns</h3>
          </div>
          <Row className="p-3">
            <Col md={12}>
              <Form.Group className="mb-3" controlId="formNachricht">
                <Form.Label className="fw-semibold">Ihre Nachricht</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Ihre Nachricht"
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formDatenschutz">
                <Form.Check
                  type="checkbox"
                  label="Ich stimme der Datenschutzerklärung zu."
                />
                <Link to="datenschutz">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="my-auto ms-2 text-primary"
                  />
                </Link>
              </Form.Group>
              <Button variant="primary" type="submit">
                Senden
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default KontaktForm;
