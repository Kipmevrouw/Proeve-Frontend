import Footer from "../components/Home-Sub-Components/Footer/Footer";
import Navigation from "../components/Home-Sub-Components/Navigation/Navigation";
import PhotoCarousel from "../components/Home-Sub-Components/PhotoCarousel/PhotoCarousel";
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
      <PhotoCarousel
        Images_1="/images/Home-Carousel-images/20240322_112408.jpg"
        Images_2="/images/Home-Carousel-images/IMG_7383.jpg"
        Images_3="/images/Home-Carousel-images/IMG_7409.jpg"
        Images_4="/images/Home-Carousel-images/IMG_7435.jpg"
        Images_5="/images/Home-Carousel-images/IMG_8405.jpg"
        Images_6="/images/Home-Carousel-images/IMG_8448.jpg"
        Images_7="/images/Home-Carousel-images/IMG_8457.jpg"
        Images_8="/images/Home-Carousel-images/IMG_8460.jpg"
        Images_9="/images/Home-Carousel-images/IMG_7388.jpg"
      />

      <Footer FooterText="Copyright © 2024 Techcampus Amsterdam" />
    </>
  );
};

export default Homepage;
