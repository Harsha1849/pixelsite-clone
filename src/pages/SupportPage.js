import React from "react";
import "../components/SupportPage.css";

const SupportPage = () => {
  return (
    <div className="support-page">
      <h1>Support</h1>
      <p>
        Welcome to our support page! We're here to help. Below, you'll find resources and ways to get in touch with us.
      </p>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>How can I track my order?</h3>
          <p>You can track your order by logging into your account and navigating to the "Orders" section.</p>
        </div>
        <div className="faq">
          <h3>What is your return policy?</h3>
          <p>We accept returns within 30 days of delivery. Please ensure the product is unused and in its original packaging.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any further questions, feel free to reach out to us:</p>
        <ul>
          <li>Email: support@example.com</li>
          <li>Phone: +1 123-456-7890</li>
          <li>Live Chat: Available 24/7</li>
        </ul>
      </section>
    </div>
  );
};

export default SupportPage;
