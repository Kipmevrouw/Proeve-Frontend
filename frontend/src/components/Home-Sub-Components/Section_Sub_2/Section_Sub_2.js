import "./Section_Sub_2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <img
            src={Images_1}
            alt="MediaCollege"
            className="Section_Sub_2_div_under_image"
          />
          <img
            src={Images_2}
            alt="GreenTech Campus MRA"
            className="Section_Sub_2_div_under_image"
          />
          <img
            src={Images_3}
            alt="ROC College Westpoort"
            className="Section_Sub_2_div_under_image"
          />
          <img
            src={Images_4}
            alt="ROC podium voor talent"
            className="Section_Sub_2_div_under_image"
          />
          <img
            src={Images_5}
            alt="ROC College Westpoort"
            className="Section_Sub_2_div_under_image"
          />
          <img
            src={Images_6}
            alt="ROC College Westpoort"
            className="Section_Sub_2_div_under_image"
          />
          <img
            src={Images_7}
            alt="ROC College Westpoort"
            className="Section_Sub_2_div_under_image"
          />
        </div>
      </div>
      <div className="sectionCarousel_sub_2">
        <Slider {...settings}>
          <div>
            <img src={Images_1} alt="Image 1" className="sectionCarouselImg" />
          </div>
          <div>
            <img src={Images_2} alt="Image 2" className="sectionCarouselImg" />
          </div>
          <div>
            <img src={Images_3} alt="Image 3" className="sectionCarouselImg" />
          </div>
          <div>
            <img src={Images_4} alt="Image 4" className="sectionCarouselImg" />
          </div>
          <div>
            <img src={Images_5} alt="Image 5" className="sectionCarouselImg" />
          </div>
          <div>
            <img src={Images_6} alt="Image 6" className="sectionCarouselImg" />
          </div>
          <div>
            <img src={Images_7} alt="Image 7" className="sectionCarouselImg" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Section_Sub_2;
