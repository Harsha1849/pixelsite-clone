import React from "react";
import "../components/BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1 className="blog-title">Our Blog</h1>
        <p className="blog-intro">
          Stay updated with the latest news, tips, and insights from our team. Explore our articles below.
        </p>
        <div className="blog-posts">
          <article className="blog-item">
            <h2>How to Stay Productive</h2>
            <p>
              Discover practical tips to boost your productivity and achieve more every day.
            </p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </article>
          <article className="blog-item">
            <h2>Top Tech Trends in 2025</h2>
            <p>
              Explore the innovations shaping the future of technology.
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

export default BlogPage;
