import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../components/ProductDetailsPage.css";

import products from "../data/products.json";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  // Hooks must be declared at the top level
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === "increment" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  return (
    <div className="product-details">
      {/* Left Section: Images */}
      <div className="product-images">
        <div className="main-image">
          <img
            src={require(`../assets/images/${product.images[currentImageIndex]}`)}
            alt={product.name}
          />
          <button className="arrow left-arrow" onClick={handlePreviousImage}>
            &lt;
          </button>
          <button className="arrow right-arrow" onClick={handleNextImage}>
            &gt;
          </button>
        </div>
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={require(`../assets/images/${image}`)}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${
                index === currentImageIndex ? "active-thumbnail" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Details */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="reviews">
          ⭐⭐⭐⭐⭐ (4.5/5)
        </p>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>
        <div className="quantity">
          <button onClick={() => handleQuantityChange("decrement")}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange("increment")}>+</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
