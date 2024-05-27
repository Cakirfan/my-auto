import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Equipment = ({ details }) => {
  // Calculate the number of items per column
  const itemsPerColumn = Math.ceil(
    details.filter((detail) => detail).length / 4
  );

  // Split the details array into four parts
  const columns = [
    details.slice(0, itemsPerColumn).filter((detail) => detail),
    details
      .slice(itemsPerColumn, 2 * itemsPerColumn)
      .filter((detail) => detail),
    details
      .slice(2 * itemsPerColumn, 3 * itemsPerColumn)
      .filter((detail) => detail),
    details.slice(3 * itemsPerColumn).filter((detail) => detail),
  ];

  return (
    <div>
      <Container className="pb-5 shadow-lg rounded rounded-2 mb-5" style={{backgroundColor: "#ffffff"}}>
        <h2 className="text-center pt-3">Ausstattung</h2>
        <hr className="mb-4" />
        <Row>
          {columns.map((column, colIndex) => (
            <Col key={colIndex}>
              <ul>
                {column.map((detail, index) => (
                  <li
                    key={colIndex * itemsPerColumn + index} // Ensure unique keys
                    className="text-decoration-none d-flex align-items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Equipment;
