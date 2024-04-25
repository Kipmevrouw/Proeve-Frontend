import React from "react";
import Slider from "react-slick";
import "./PhotoCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
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
