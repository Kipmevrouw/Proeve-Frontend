import "./VideoCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const CustomPrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0 15 24" width="36" height="36">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12"/>
    </svg>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 0 15 24" width="36" height="36">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M10.59 16.41L12 18l6-6-6-6-1.41 1.41L15.17 12"/>
    </svg>
  </div>
);

const VideoCarousel = ({ youtubeVideos, youtubeVideoTitles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="VideoCarousel_div_top">
        <h1 className="VideoCarousel_div_top_h1">7 werelden van techniek</h1>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {youtubeVideos.map((videoId, index) => (
            <div key={index}>
              <iframe
                title={youtubeVideoTitles[index]}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="iframeVideo"
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default VideoCarousel;
