import React, { useEffect } from "react";
import {
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faStar,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SozialeMedien = () => {
  useEffect(() => {
    // Bootstrap tooltip'leri başlat
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const sozialIcons = [
    {
      title: "Star",
      href: "https://wa.me/4915511111111",
      icon: faStar,
    },
    {
      title: "Share",
      href: "",
      icon: faShare,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com",
      icon: faFacebook,
    },
    {
      title: "Twitter",
      href: "https://www.twitter.com",
      icon: faTwitter,
    },
  ];

  return (
    <>
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
        <span className="fw-semibold">teilen:</span>
        {sozialIcons.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={icon.title}
            rel="noreferrer"
          >
            <button
              type="button"
              className="btn btn-sm btn-outline-danger mx-1"
            >
              <FontAwesomeIcon icon={icon.icon} />
            </button>
          </a>
        ))}
      </div>
    </>
  );
};

export default SozialeMedien;
