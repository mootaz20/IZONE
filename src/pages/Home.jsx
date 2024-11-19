import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarComponents from "../components/NavbarComponents";
import News from "../components/News";
import SliderComponent from "../components/SliderComponent";
import Teams from "../components/Teams";
import Workshops from "../components/Workshops";




export default function Home() {
  return (
   <>
    <SliderComponent>
    <NavbarComponents />
    <Header />
    </SliderComponent>
    <News />
    <AboutUs />
    <Workshops />
    <Teams />
    <Footer />
   </>
  )
}
