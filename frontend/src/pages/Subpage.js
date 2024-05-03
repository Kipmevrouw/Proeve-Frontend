import Navigation from "../components/Home-Sub-Components/Navigation/Navigation";
import Section_sub_1 from "../components/Home-Sub-Components/Section_Sub_1/Section_sub_1";
import Section_Sub_2 from "../components/Home-Sub-Components/Section_Sub_2/Section_Sub_2";
import Footer from "../components/Home-Sub-Components/Footer/Footer";
import VideoCarousel from "../components/Home-Sub-Components/VideoCarousel/VideoCarousel";
const Subpage = () => {
  const youtubeVideos = [
    "PiyINVYt0n8?si=WxGSgGOD_YCHae6f",
    "OYXOP_sG4m4?si=GOr-zDkY3Mb1OJ9T",
    "R1LJfg7HA7A?si=BKAs_uR2FnbJuXsF",
    "w98zbxRIXvI?si=7gbiXwSZa6Mm3Vlu",
    "ECphtJ8H070?si=983J-YicZWb5fQDn",
    "tUyZv5t8TkY?si=q4dMkSE18gZewiyU",
    "MEEyS0ZOG4c?si=S5X9-kImEEYC2faP",
  ];

  const youtubeVideoTitles = [
    "Ontwerp, Productie & Wereldhandel",
    "Mens & Gezondheid",
    "Energie, Water & Veiligheid",
    "Wonen, Werk & Verkeer",
    "Digitaal, Media & Entertainment",
    "Hi-Tech & Science",
    "Voeding & Natuur",
  ];
  return (
    <>
      <Navigation Logo="/images/Home-Sub-images/TechCampusLogo.png" />
      <Section_sub_1 Images_1="/images/Home-Sub-images/Werelden.jpg" />
      <VideoCarousel youtubeVideos={youtubeVideos} youtubeVideoTitles={youtubeVideoTitles}/>
      <Section_Sub_2
        Images_1="/images/Home-Sub-images/Sub-Techniek/20190219_TT_ICONEN_CMYK-1  mens en gezondheid.jpg"
        Images_2="/images/Home-Sub-images/Sub-Techniek/20190219_TT_ICONEN_CMYK-2 voeding en natuur.jpg"
        Images_3="/images/Home-Sub-images/Sub-Techniek/20190219_TT_ICONEN_CMYK-3 ontwerp, productie en wereldhandel.jpg"
        Images_4="/images/Home-Sub-images/Sub-Techniek/20190219_TT_ICONEN_CMYK-4 high tech.jpg"
        Images_5="/images/Home-Sub-images/Sub-Techniek/20190219_TT_ICONEN_CMYK-5 wonen werken en verkeer.jpg"
        Images_6="/images/Home-Sub-images/Sub-Techniek/20190219_TT_ICONEN_CMYK-6 energie, water en veiligheid.jpg"
        Images_7="/images/Home-Sub-images/Sub-Techniek/20190219_TT_ICONEN_CMYK-7 digitaal media entertainment.jpg"
      />
      <Footer FooterText="Copyright © 2024 Techcampus Amsterdam" />
    </>
  );
};

export default Subpage;
