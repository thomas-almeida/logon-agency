
import AgencyTestimonial from "./components/agency-testimonial";
import ContainerComposition from "./components/container-composition";
import Enterprises from "./components/enterprises";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Cases from "./components/sections/cases";
import TopBar from "./components/topbar";
import Services from "./components/sections/services";
import Awards from "./components/sections/awards";
import Team from "./components/sections/team";
import Contact from "./components/sections/contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <HeroSection />
      <ContainerComposition>
        <div>
          <AgencyTestimonial />
          <Cases />
          <Services />
          <Awards />
          <Team />
          <Contact />
        </div>
      </ContainerComposition>
      <Footer />
    </>
  );
}
