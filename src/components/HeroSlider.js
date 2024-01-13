import React from "react";
import headerImage from "../assets/images/sxm.png";
import ImageSlider, { Slide } from "react-auto-image-slider";

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
              src={headerImage}
            />
          </Slide>
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
              src={headerImage}
            />
          </Slide>
          <Slide className="slider-img">
            <img
              className="slider-img"
              alt="anra caribbean images"
              src={headerImage}
            />
          </Slide>
        </ImageSlider>
      </div>
    </div>
  );
}

export default HeroSlider;
