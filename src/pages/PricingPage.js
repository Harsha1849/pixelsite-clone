import React from "react";
import "../components/PricingPage.css";

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-container">
        <h1 className="pricing-title">Cloud Pricing Plans</h1>
        <p className="pricing-intro">
          Choose a plan that fits your needs. We offer transparent and affordable pricing.
        </p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h2>Basic Plan</h2>
            <p className="price">$9/month</p>
            <ul>
              <li>Access to core features</li>
              <li>Email support</li>
              <li>10 GB storage</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-card popular">
            <h2>Pro Plan</h2>
            <p className="price">$29/month</p>
            <ul>
              <li>All Basic features</li>
              <li>Priority support</li>
              <li>50 GB storage</li>
              <li>Advanced analytics</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-card">
            <h2>Enterprise Plan</h2>
            <p className="price">Custom Pricing</p>
            <ul>
              <li>All Pro features</li>
              <li>Dedicated account manager</li>
              <li>Unlimited storage</li>
              <li>Custom integrations</li>
            </ul>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
