import Features from "./sections/Features";
import FinalCTA from "./sections/FinalCTA";
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
    </div>
  );
};

export default LandingPage;
