import React, { useState, useEffect } from "react";
import "./GoHome.css";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const GoHome = () => {
  const [showGoHomeButton, setShowGoHomeButton] = useState(false);

  // Kullanıcının sayfayı aşağı kaydırdığını izlemek için bir event listener ekliyoruz
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowGoHomeButton(true);
      } else {
        setShowGoHomeButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Temizlik işlemi - bileşen çözüldüğünde event listener'ı kaldırıyoruz
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      to="/"
      className={`goHome ${
        showGoHomeButton ? "active" : ""
      } bg-black border border-2 border-white`}
      onClick={goToHome}
    >
      <BsFillHouseCheckFill className="icon text-white" />
    </Link>
  );
};

export default GoHome;
