import Footer from "../components/Home-Sub-Components/Footer/Footer";
import Navigation from "../components/Home-Sub-Components/Navigation/Navigation";
import Section_1 from "../components/Home-Sub-Components/Section_1/Section_1";
import Section_2 from "../components/Home-Sub-Components/Section_2/Section_2";

const Homepage = () => {
  return (
    <>
      <Navigation Logo="/images/Home-Sub-images/TechCampusLogo.png" />
      <Section_1 />
      <Section_2
        Images_1="/images/Home-Sub-images/primary-logo.png"
        Images_2="/images/Home-Sub-images/GTC.png"
        Images_3="/images/Home-Sub-images/HMC.png"
        Images_4="/images/Home-Sub-images/03_ROCvA_logo_LIJN_RGB (1).png"
        Images_5="/images/Home-Sub-images/03_ROCvA_logo_MBO_Westpoort_LIJN_RGB.png"
      />
      <Footer FooterText="Copyright © 2024 TechIsland" />
    </>
  );
};

export default Homepage;
