import React from "react";
import "../components/LegalPages.css";

const PrivacyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains how we handle your data.</p>
        <h2>1. Data Collection</h2>
        <p>
          We collect personal information you provide, such as name and email, as well as usage data like browsing activity.
        </p>
        <h2>2. Data Usage</h2>
        <p>
          The collected data is used to improve our services, communicate with you, and ensure a secure experience.
        </p>
        <h2>3. Data Sharing</h2>
        <p>
          We do not share your data with third parties unless required by law or with your explicit consent.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
