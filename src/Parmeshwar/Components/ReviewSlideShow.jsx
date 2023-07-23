import React, { useState } from "react";
import styled from "styled-components"

const images = [
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/500x200",
    "https://via.placeholder.com/600x200",
    "https://via.placeholder.com/700x200",
  ];

export const ReviewSlideShow = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedImages = currentIndex === 0 ? images.slice(-5) : images.slice(currentIndex - 1, currentIndex + 4);

  return (
    <DIV>
     <div className="slideshow-container">
      <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {displayedImages.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button onClick={prevSlide}>&lt;</button>
      <button onClick={nextSlide}>&gt;</button>
    </div>
    </DIV>
  )
}

const DIV = styled.div`
.slideshow-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slide {
  display: flex;
  transition: transform 0.3s ease;
}

img {
  height: 200px; /* Set the height you want */
  width: auto;
  margin: 0;
  padding: 0;
}

button {
  margin-top: 20px;
  font-size: 20px;
  cursor: pointer;
}
`

