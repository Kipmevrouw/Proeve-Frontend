import "./Dashboard.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = ({ Logo, Images_1, Images_2, Images_3 }) => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="dashboard_Background">
        <div className="dashboard_Nav">
          <Link to="/Studentpage">
            <img
              src={Logo}
              alt="TechCampusLogo"
              className="dashboard_Logo"
            ></img>
          </Link>
        </div>
        <div className="dashboard_Setup">
          <h1 className="dashboard_h1">Jouw workshops:</h1>
          <div className="dashboard_Cards">
            <div className="card">
              <img src={Images_1} className="dashboard_Cards_image" />
              <p className="card_P">
                In de wereld van Mens & Gezondheid draait alles om mensen
                vitaler en gezonder te maken. Mét behulp van de nieuwste
                technische toepassingen. In deze wereld werkt men aan het
                ontwerpen, maken, onderhouden en bedienen van medische apparaten
                en hulpmiddelen. <a href="">Bekijk de video.</a>
              </p>
            </div>
            <div className="card">
              <img src={Images_2} className="dashboard_Cards_image" />
              <p className="card_P">
                In de wereld van Voeding & Natuur is de grote uitdaging om de
                steeds groeiende wereldbevolking van genoeg en gezond voedsel te
                blijven voorzien. Én tegelijkertijd te zorgen dat het in balans
                met de natuur gebeurt. Hier draagt iedereen bij aan een betere
                wereld. <a href="">Bekijk de video.</a>
              </p>
            </div>
            <div className="card">
              <img src={Images_3} className="dashboard_Cards_image" />
              <p className="card_P">
                In de wereld van Ontwerp, Productie & Wereldhandel bedenken,
                ontwerpen, maken en verkopen we producten en diensten die de
                wereldeconomie draaiende houden. Om alles op te slaan en te
                vervoeren zijn mega-magazijnen, vliegvelden en havens nodig.{" "}
                <a href="">Bekijk de video.</a>
              </p>
            </div>
          </div>
          <div className="sectionCarousel_sub_2">
            <Slider {...settings}>
              <div>
                <img
                  src={Images_1}
                  alt="Image 1"
                  className="sectionCarouselImg_sub"
                />
              </div>
              <div>
                <img
                  src={Images_2}
                  alt="Image 2"
                  className="sectionCarouselImg_sub"
                />
              </div>
              <div>
                <img
                  src={Images_3}
                  alt="Image 3"
                  className="sectionCarouselImg_sub"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="dashboard_Nav">
          <Link to="/">
            <button type="button" className="dashboard_Uitloggen">
              Uitloggen
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
