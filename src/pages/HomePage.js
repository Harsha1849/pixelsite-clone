// HomePage.js
import React from "react";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductCards";
import ReviewCard from "../components/ReviewCard";
import WhyChoose from "../components/WhyChoose";

const HomePage = () => {
  return (
    <>

      <Hero />
      <div data-aos="fade-up">
        <ProductCards />
      </div>
      <div className="main-container"> {/* Ensures spacing between sections */}
        <WhyChoose />
      </div>
      <div data-aos="fade-up">
        <ReviewCard />
      </div>
    </>
  );
};

export default HomePage;
