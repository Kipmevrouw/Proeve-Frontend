import "./Section_Sub_2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const Section_Sub_2 = ({
  Images_1,
  Images_2,
  Images_3,
  Images_4,
  Images_5,
  Images_6,
  Images_7,
}) => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
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
      <div className="Section_Sub_2_div">
        <div className="Section_Sub_2_div_under">
          <img src={Images_1} className="Section_Sub_2_div_under_image" />
          <img src={Images_2} className="Section_Sub_2_div_under_image" />
          <img src={Images_3} className="Section_Sub_2_div_under_image" />
          <img src={Images_4} className="Section_Sub_2_div_under_image" />
          <img src={Images_5} className="Section_Sub_2_div_under_image" />
          <img src={Images_6} className="Section_Sub_2_div_under_image" />
          <img src={Images_7} className="Section_Sub_2_div_under_image" />
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
          <div>
            <img
              src={Images_4}
              alt="Image 4"
              className="sectionCarouselImg_sub"
            />
          </div>
          <div>
            <img
              src={Images_5}
              alt="Image 5"
              className="sectionCarouselImg_sub"
            />
          </div>
          <div>
            <img
              src={Images_6}
              alt="Image 6"
              className="sectionCarouselImg_sub"
            />
          </div>
          <div>
            <img
              src={Images_7}
              alt="Image 7"
              className="sectionCarouselImg_sub"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Section_Sub_2;
