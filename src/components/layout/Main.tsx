import About from "../pages/About";
import Hero from "../pages/Hero";
import Mission from "../pages/Mission";
import Services from "../pages/Services";
import StatsSection from "../pages/StatsSection";

const Main = () => {
  return (
    <>
      <div className="bg-[url('/images/background.webp')] bg-cover bg-center h-auto">
        <Hero />
      </div>
      <About />
      <StatsSection />
      <Services />
      <Mission />
    </>
  );
};

export default Main;
