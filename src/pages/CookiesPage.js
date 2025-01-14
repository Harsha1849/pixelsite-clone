import React from "react";
import "../components/LegalPages.css";

const CookiesPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Cookie Policy</h1>
        <p>This policy explains how we use cookies and similar technologies on our website.</p>
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device to improve your browsing experience and enable certain functionalities.
        </p>
        <h2>2. Types of Cookies We Use</h2>
        <p>
          We use essential cookies for site functionality, as well as analytics cookies to understand user behavior.
        </p>
        <h2>3. Managing Cookies</h2>
        <p>
          You can manage or disable cookies through your browser settings. However, this may affect the functionality of our site.
        </p>
      </div>
    </div>
  );
};

export default CookiesPage;
