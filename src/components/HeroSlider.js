import React from "react";
import headerImage from "../assets/images/sxm.png";
import headerImage2 from "../assets/images/image8.png";
import headerImage3 from "../assets/images/image14.jpeg";
import headerImage4 from "../assets/images/image6.jpeg";
import headerImage5 from "../assets/images/image1.jpeg";
import ImageSlider, { Slide } from "react-auto-image-slider";
import "../styles/components/Header.css";

function HeroSlider() {
  return (
    <div>
      <div className="header-container">
        <ImageSlider
          className="slider-container"
          effectDelay={400}
          autoPlayDelay={3000}
        >
          <Slide className="slider-img">
            <img
              className="slider-img"
              alt="anra caribbean images"
              src={headerImage}
            />
          </Slide>
          <Slide className="slider-img">
            <img
              className="slider-img"
              alt="anra caribbean images"
              src={headerImage2}
            />
          </Slide>
          <Slide className="slider-img">
            <img
              className="slider-img"
              alt="anra caribbean images"
              src={headerImage3}
            />
          </Slide>
          <Slide className="slider-img">
            <img
              className="slider-img"
              alt="anra caribbean images"
              src={headerImage4}
            />
          </Slide>
          <Slide className="slider-img">
            <img
              className="slider-img"
              alt="anra caribbean images"
              src={headerImage5}
            />
          </Slide>
        </ImageSlider>
      </div>
    </div>
  );
}

export default HeroSlider;
