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
            <div>
              <img src={Images_1} className="dashboard_Cards_image" />
            </div>
            <div>
              <img src={Images_2} className="dashboard_Cards_image" />
            </div>
            <div>
              <img src={Images_3} className="dashboard_Cards_image" />
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
