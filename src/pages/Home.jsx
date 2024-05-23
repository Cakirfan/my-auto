import Angebote from "../components/Angebote"
import CarouselTop from "../components/CarouselTop"
import FahrzeugSuchen from "../components/FahrzeugSuchen"
import Finanzierung from "../components/Finanzierung"


const Home = () => {
  return (
    <>
      <CarouselTop/>
      <FahrzeugSuchen/>
      <Finanzierung/>
      <Angebote/>
    </>
  )
}

export default Home
