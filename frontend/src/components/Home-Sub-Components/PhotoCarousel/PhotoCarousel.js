import React from "react";
import Slider from "react-slick";
import "./PhotoCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// These are the arrows for the carousels
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
// Carousel
const PhotoCarousel = ({
  Images_1,
  Images_2,
  Images_3,
  Images_4,
  Images_5,
  Images_6,
  Images_7,
  Images_8,
  Images_9,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="photoCarousel">
      <Slider {...settings}>
        <div>
          <img src={Images_1} alt="Image 1" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_2} alt="Image 2" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_3} alt="Image 3" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_4} alt="Image 1" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_5} alt="Image 2" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_6} alt="Image 3" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_7} alt="Image 3" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_8} alt="Image 3" className="photoCarouselImg" />
        </div>
        <div>
          <img src={Images_9} alt="Image 3" className="photoCarouselImg" />
        </div>
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
