import Contact from "../components/Contact";
import CoreToolkit from "../components/CoreToolkit";
import PlatformCTA from "../components/PlatformCTA";
import PlatformIntro from "../components/PlatformIntro";
import Pricing from "../components/Pricing";
import Publications from "../components/Publications";

const AiPlatformPage = () => {
  return (
    <div className="pt-20">
      <PlatformIntro />
      <CoreToolkit />
      <Pricing />
      <Publications />
      <PlatformCTA />
      <Contact />
    </div>
  );
};

export default AiPlatformPage;