// CustomerReview.js
import React from "react";
import "./ReviewCard.css";
import reviewImage1 from "../assets/images/user_icon.webp";
import reviewImage2 from "../assets/images/user_icon.webp";
import reviewImage3 from "../assets/images/user_icon.webp";

const ReviewCard = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "I absolutely love my Pixel! The camera is amazing, and the performance is outstanding. Highly recommend!",
      image: reviewImage1,
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "The Pixel is everything I expected. Great battery life and seamless performance. Worth every penny!",
      image: reviewImage2,
      rating: 4,
    },
    {
      id: 3,
      name: "Alice Johnson",
      review:
        "This phone exceeded my expectations. The security features give me peace of mind, and the camera quality is fantastic!",
      image: reviewImage3,
      rating: 5,
    },
  ];

  return (
    <div className="customer-reviews">
      <h2 className="reviews-title">What Our Customers Say</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <div className="review-content">
              <h3 className="review-name">{review.name}</h3>
              <p className="review-text">{review.review}</p>
              <div className="review-rating">
                {"★".repeat(review.rating)}{" "}
                <span className="review-rating-text">
                  ({review.rating}/5)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;