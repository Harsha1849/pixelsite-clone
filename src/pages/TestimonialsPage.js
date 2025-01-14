import React from "react";
import "../components/TestimonialsPage.css";

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <div className="testimonials-container">
        <h1 className="testimonials-title">What Our Users Say</h1>
        <p className="testimonials-intro">
          Hear from our happy customers who love using our services.
        </p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "This platform has been a game-changer for my business. Highly recommended!"
            </p>
            <p className="testimonial-author">- Jane Doe</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Excellent customer service and top-notch features. I couldn't be happier."
            </p>
            <p className="testimonial-author">- John Smith</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "A seamless experience from start to finish. Truly impressive."
            </p>
            <p className="testimonial-author">- Alex Johnson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
