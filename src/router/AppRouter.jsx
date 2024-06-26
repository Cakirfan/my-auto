import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kontakt from "../pages/kontakt/Kontakt";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Datenschutzerklärung from "../pages/Datenschutzerklärung";
import Footer from "../components/footer/Footer";
import AutoDetail from "../pages/autoDetails/AutoDetail";
import GoHome from "../components/goHome/GoHome";
import ScrollBtn from "../components/scrollTop/ScrollBtn";
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/ErrorPage";
import Cookies from "../pages/Cookies";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Angebote from "../pages/carAngebote/Angebote";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <GoHome />
      <ScrollBtn />
      <Cookies />
      <div style={{ height: "6.28rem" }}></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="angebote" element={<Angebote />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route element={<NotFound />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="datenschutz" element={<Datenschutzerklärung />} />
        <Route path="/details/:id" element={<AutoDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
