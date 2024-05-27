import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailSection = ({ details }) => (
  <div>
    <h4 className="text-center mb-3">Details</h4>
    {details.map((detail, idx) => (
      <div>
        <div key={idx} className="py-1 d-flex align-items-center">
          <FontAwesomeIcon icon={detail.icon} className="mx-2" />{" "}
          <div
            className="w-100 fw-semibold d-flex justify-content-between text-uppercase"
            style={{ fontSize: ".9rem" }}
          >
            <span className="text-secondary">{detail.label1}</span>
            <span>{detail.label2}</span>
          </div>
        </div>
        <hr />
      </div>
    ))}
  </div>
);

export default DetailSection;
