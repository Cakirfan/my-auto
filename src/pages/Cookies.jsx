import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cookies = () => {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <Alert variant="dark" className="fixed-bottom m-3 shadow-lg">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>We use cookies to improve your experience.</strong> By using
          our website, you agree to our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </div>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Accept
        </Button>
      </div>
    </Alert>
  );
};

export default Cookies;
