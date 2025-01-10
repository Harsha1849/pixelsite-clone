import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import pixel8pro from "../assets/images/pixel8ld.webp";
import pixel7pro from "../assets/images/pixel7prold.webp";
import pixel6a1 from "../assets/images/pixel6a1.webp";

const Hero = () => {
  const slides = [
    { id: 1, image: pixel8pro, title: "Experience Pixel 8 Pro", link: "/1" },
    { id: 2, image: pixel7pro, title: "Discover Pixel 7 Pro", link: "/2" },
    { id: 3, image: pixel6a1, title: "Revolutionary Pixel 6a", link: "/3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <div className="hero-slider">
      <div
        className="hero-slide"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <button className="prev-btn" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &#8250;
        </button>
        <div
          className="hero-title-container"
          onClick={() => handleNavigate(slides[currentSlide].link)}
          style={{ cursor: "pointer" }}
        >
          <span className="hero-title">{slides[currentSlide].title}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
