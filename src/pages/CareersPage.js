import React from "react";
import "../components/CareersPage.css"

const CareersPage = () => {
    return (
      <div className="careers-page">
        <div className="careers-container">
          <h1 className="careers-title">Join Our Team</h1>
          <p className="careers-text">
            We're looking for talented individuals who share our vision of innovation and excellence. At our company, we foster a culture of growth, collaboration, and creativity.
          </p>
          <ul className="careers-list">
            <li>Competitive salary and benefits</li>
            <li>Flexible work environment</li>
            <li>Opportunities for professional development</li>
            <li>Collaborative and inclusive culture</li>
          </ul>
          <p className="careers-text">
            If you're ready to take the next step in your career, explore our open positions and join our dynamic team!
          </p>
        </div>
      </div>
    );
  };
  
  export default CareersPage;
