// import Angebote from "../components/carAngebote/Angebote"
import CarouselTop from "../components/CarouselTop"
import FahrzeugSuchen from "../components/FahrzeugSuchen"
import Finanzierung from "../components/Finanzierung"
import LatestCars from "../components/CarCard"


const Home = () => {
  return (
    <>
      <CarouselTop />
      <FahrzeugSuchen />
      <Finanzierung />
      {/* <Angebote/> */}
      <LatestCars/>
    </>
  );
}

export default Home
