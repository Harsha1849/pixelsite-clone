// import React, { useState } from "react";
// import "./Hero.css";
// import pixel8pro from "../assets/images/pixelcut-export.jpeg";
// import pixel9pro from "../assets/images/pixel9pro.avif";
// import pixel6a1 from "../assets/images/pixel6a1.webp";

// const Hero = () => {
//   const slides = [
//     { id: 1, image: pixel8pro, title: "Experience Pixel 8 Pro", link: "/pixel-8-pro" },
//     { id: 2, image: pixel9pro, title: "Discover Pixel 9 Pro", link: "/pixel-7-pro" },
//     { id: 3, image: pixel6a1, title: "Revolutionary Pixel 6a", link: "/pixel-6a" },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <div className="hero-slider">
//       <div
//         className="hero-slide"
//         style={{
//           backgroundImage: `url(${slides[currentSlide].image})`,
//         }}
//       >
//         <button className="prev-btn" onClick={prevSlide}>
//           &#8249;
//         </button>
//         <button className="next-btn" onClick={nextSlide}>
//           &#8250;
//         </button>
//         <div className="hero-title-container">
//           <a href={slides[currentSlide].link} className="hero-title">
//             {slides[currentSlide].title}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import "./Hero.css";
import pixel8pro from "../assets/images/pixelcut-export.jpeg";
import pixel9pro from "../assets/images/pixel9pro.avif";
import pixel6a1 from "../assets/images/pixel6a1.webp";

const Hero = () => {
  const slides = [
    { id: 1, image: pixel8pro, title: "Experience Pixel 8 Pro", link: "/pixel-8-pro" },
    { id: 2, image: pixel9pro, title: "Discover Pixel 9 Pro", link: "/pixel-9-pro" },
    { id: 3, image: pixel6a1, title: "Revolutionary Pixel 6a", link: "/pixel-6a" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
        <div className="hero-title-container">
          <a href={slides[currentSlide].link} className="hero-title">
            {slides[currentSlide].title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;