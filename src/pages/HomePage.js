// HomePage.js
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductCards";
import ReviewCard from "../components/ReviewCard";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default HomePage;
