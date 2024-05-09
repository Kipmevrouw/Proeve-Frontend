import React, { useEffect } from "react";
import Swiper from "swiper";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = ({ Logo }) => {
  useEffect(() => {
    const swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  }, []);

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
          <div>
            <div class="blog-slider">
              <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide">
                  <div class="blog-slider__img">
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
                  </div>
                  <div class="blog-slider__content">
                    <span class="blog-slider__code">26 December 2019</span>
                    <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                    <a href="#" class="blog-slider__button">READ MORE</a>
                  </div>
                </div>
                <div class="blog-slider__item swiper-slide">
                  <div class="blog-slider__img">
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt="" />
                  </div>
                  <div class="blog-slider__content">
                    <span class="blog-slider__code">26 December 2019</span>
                    <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
                    <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <a href="#" class="blog-slider__button">READ MORE</a>
                  </div>
                </div>

                <div class="blog-slider__item swiper-slide">
                  <div class="blog-slider__img">
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="" />
                  </div>
                  <div class="blog-slider__content">
                    <span class="blog-slider__code">26 December 2019</span>
                    <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <a href="#" class="blog-slider__button">READ MORE</a>
                  </div>
                </div>

              </div>
              <div class="blog-slider__pagination"></div>
            </div>
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
