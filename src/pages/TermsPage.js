import React from "react";
import "../components/LegalPages.css";

const TermsPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Terms of Service</h1>
        <p>Welcome to our Terms of Service. Please read them carefully before using our services.</p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using our services, you agree to comply with these terms. If you do not agree, please refrain from using our platform.
        </p>
        <h2>2. Use of Services</h2>
        <p>
          You are responsible for your use of our services and for any content you create, upload, or share. Misuse of our platform may result in termination of your access.
        </p>
        <h2>3. Updates to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Please review them periodically for changes.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
