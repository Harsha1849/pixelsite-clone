import React from "react";
import "../components/PressPage.css";

const PressPage = () => {
  return (
    <div className="press-page">
      <div className="press-container">
        <h1 className="press-title">In the Press</h1>
        <p className="press-intro">
          Discover what the world is saying about us. We're proud to be featured in leading publications and media outlets.
        </p>
        <div className="press-articles">
          <article className="press-item">
            <h2>Innovating the Future</h2>
            <p>
              "Our company is shaping the future with groundbreaking innovations." 
              <span>- Tech Times</span>
            </p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </article>
          <article className="press-item">
            <h2>Top Startups to Watch</h2>
            <p>
              "Ranked among the top startups making a global impact." 
              <span>- Startup Daily</span>
            </p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
