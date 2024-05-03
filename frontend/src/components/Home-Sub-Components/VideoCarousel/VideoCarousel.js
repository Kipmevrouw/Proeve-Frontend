import "./VideoCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = ({ youtubeVideos, youtubeVideoTitles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
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
