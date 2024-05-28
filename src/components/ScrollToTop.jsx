import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // location.pathname'e bağlı olarak tetiklenir

  return null;
};

export default ScrollToTop;
