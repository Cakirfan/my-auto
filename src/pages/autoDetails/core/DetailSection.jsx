import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailSection = ({ details }) => (
  <div>
    <h4 className="text-center mb-3">Details</h4>
    {details.map((detail, idx) => (
      <div>
        <p key={idx} className="py-2">
          <FontAwesomeIcon icon={detail.icon} className="mx-2" /> {detail.label}
        </p>
        <hr />
      </div>
    ))}
  </div>
);

export default DetailSection;
