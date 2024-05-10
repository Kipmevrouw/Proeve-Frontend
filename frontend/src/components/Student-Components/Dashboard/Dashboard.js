import "./Dashboard.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = ({ Logo, Images_1, Images_2, Images_3 }) => {
  const CustomPrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="12 0 15 24"
        width="36"
        height="36"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12" />
      </svg>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="10 0 20 24"
        width="36"
        height="36"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10.59 16.41L12 18l6-6-6-6-1.41 1.41L15.17 12" />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
                en hulpmiddelen.{" "}
                <a href="" className="card_A">
                  Bekijk de video.
                </a>
              </p>
            </div>
            <div className="card">
              <img src={Images_2} className="dashboard_Cards_image" />
              <p className="card_P">
                In de wereld van Voeding & Natuur is de grote uitdaging om de
                steeds groeiende wereldbevolking van genoeg en gezond voedsel te
                blijven voorzien. Én tegelijkertijd te zorgen dat het in balans
                met de natuur gebeurt. Hier draagt iedereen bij aan een betere
                <a href="" className="card_A">
                  Bekijk de video.
                </a>
              </p>
            </div>
            <div className="card">
              <img src={Images_3} className="dashboard_Cards_image" />
              <p className="card_P">
                In de wereld van Ontwerp, Productie & Wereldhandel bedenken,
                ontwerpen, maken en verkopen we producten en diensten die de
                wereldeconomie draaiende houden. Om alles op te slaan en te
                vervoeren zijn mega-magazijnen, vliegvelden en havens nodig.{" "}
                <a href="" className="card_A">
                  Bekijk de video.
                </a>
              </p>
            </div>
          </div>
          <div className="dashboard_Cards_responsive">
            <Slider {...settings}>
              <div className="card_wrapper">
                <div className="card">
                  <img src={Images_1} className="dashboard_Cards_image" />
                  <p className="card_P">
                    In de wereld van Mens & Gezondheid draait alles om mensen
                    vitaler en gezonder te maken. Mét behulp van de nieuwste
                    technische toepassingen. In deze wereld werkt men aan het
                    ontwerpen, maken, onderhouden en bedienen van medische
                    apparaten en hulpmiddelen.
                  </p>
                  <a href="" className="card_A">
                    Bekijk de video.
                  </a>
                </div>
              </div>
              <div className="card_wrapper">
                <div className="card">
                  <img src={Images_2} className="dashboard_Cards_image" />
                  <p className="card_P">
                    In de wereld van Voeding & Natuur is de grote uitdaging om
                    de steeds groeiende wereldbevolking van genoeg en gezond
                    voedsel te blijven voorzien. Én tegelijkertijd te zorgen dat
                    het in balans met de natuur gebeurt. Hier draagt iedereen
                    bij aan een betere wereld.
                  </p>
                  <a href="" className="card_A">
                    Bekijk de video.
                  </a>
                </div>
              </div>
              <div className="card_wrapper">
                <div className="card">
                  <img src={Images_3} className="dashboard_Cards_image" />
                  <p className="card_P">
                    In de wereld van Ontwerp, Productie & Wereldhandel bedenken,
                    ontwerpen, maken en verkopen we producten en diensten die de
                    wereldeconomie draaiende houden. Om alles op te slaan en te
                    vervoeren zijn mega-magazijnen, vliegvelden en havens nodig.{" "}
                  </p>
                  <a href="" className="card_A">
                    Bekijk de video.
                  </a>
                </div>
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
