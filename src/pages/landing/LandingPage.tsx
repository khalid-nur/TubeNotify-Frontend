import Features from "./sections/Features";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import UseCases from "./sections/UseCases";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
