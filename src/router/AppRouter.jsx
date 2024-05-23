import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kontakt from "../pages/kontakt/Kontakt";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Datenschutzerklärung from "../pages/Datenschutzerklärung";
import Footer from "../components/footer/Footer";
import AutoDetail from "../pages/autoDetails/AutoDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ height: "6.28rem" }}></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="datenschutz" element={<Datenschutzerklärung />} />
        <Route path="/details/:id" element={<AutoDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
