import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailSection = ({ details }) => (
  <div>
    <h4 className="text-center mb-3">Details</h4>
    {details.map((detail, idx) => (
      <div>
        <div key={idx} className="d-flex align-items-center gap-1">
          <FontAwesomeIcon icon={detail.icon} className="mx-2" />{" "}
          <div
            className="w-100 fw-semibold d-flex justify-content-between text-capitalize"
            style={{ fontSize: ".9rem" }}
          >
            <span className="text-secondary">{detail.label1}</span>
            <span>{detail.label2}</span>
          </div>
        </div>
        <hr style={{marginBottom: ".7rem"}}/>
      </div>
    ))}
  </div>
);

export default DetailSection;
