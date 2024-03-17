import React, { useState } from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  CircleDashed,
  CircleIcon,
} from "lucide-react";

//styles
import "../styles/components/ImageSlider.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export default function SliderImage({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            alt="propety views"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPreviousImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          bottom: ".5 rem",
          position: "absolute",

          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDashed /> : <CircleIcon />}
          </button>
        ))}
      </div>
    </div>
  );
}
