// WhyChoose.js
import React from "react";
import "./WhyChoose.css";
import cameraImg from "../assets/images/camera.jpg";
import performanceImg from "../assets/images/performance.png";
import securityImg from "../assets/images/security.png";
import batteryImg from "../assets/images/battery.jpg"; 

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      title: "Unmatched Camera",
      description: "Capture moments like never before with Google's AI-enhanced photography.",
      image: cameraImg,
    },
    {
      id: 2,
      title: "Seamless Performance",
      description: "Powered by Google Tensor chip, Pixel delivers speed and efficiency.",
      image: performanceImg,
    },
    {
      id: 3,
      title: "Exceptional Security",
      description: "Stay safe with Titan M chip and guaranteed security updates.",
      image: securityImg,
    },
    {
      id: 4,
      title: "Long-lasting Battery",
      description: "Enjoy all-day battery life with fast charging and efficient power management.",
      image: batteryImg, 
    },
  ];

  return (
    <div className="why-choose-section">
      <h2 className="why-choose-title">Why Choose Pixel?</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-frame">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
