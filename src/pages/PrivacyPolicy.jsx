import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Privacy Policy</h1>
          <p>Last updated: [Date]</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to [Your Company Name]. We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns about our policy, or our practices with
            regards to your personal information, please contact us at
            [your-email@example.com].
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us such as name,
            address, contact information, passwords and security data, payment
            information, and social media login data. We also collect
            information automatically when you visit our website.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>

          <h2>4. Sharing Your Information</h2>
          <p>
            We only share information with your consent, to comply with laws, to
            provide you with services, to protect your rights, or to fulfill
            business obligations.
          </p>

          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information. These may include the right to access,
            correct, delete, or restrict the use of your personal information.
            You may also have the right to object to the processing of your
            personal information or to data portability.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email
            us at [your-email@example.com] or by post to:
          </p>
          <p>
            [Your Company Name] <br />
            [Your Company Address] <br />
            [City, State, ZIP Code] <br />
            [Country]
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
