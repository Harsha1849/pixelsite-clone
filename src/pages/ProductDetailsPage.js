import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../components/ProductDetailsPage.css";
import products from "../data/products.json";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div className="not-found">Product not found!</div>;
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
      <section className="product-images" data-aos="fade-up">
        <div className="main-image">
          <img
            src={require(`../assets/images/${product.images[currentImageIndex]}`)}
            alt={product.name}
          />
          <button
            className="arrow left-arrow"
            onClick={handlePreviousImage}
            aria-label="Previous Image"
          >
            &lt;
          </button>
          <button
            className="arrow right-arrow"
            onClick={handleNextImage}
            aria-label="Next Image"
          >
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
      </section>

      <section className="product-info" data-aos="fade-left">
        <h1>{product.name}</h1>
        <p className="reviews">⭐⭐⭐⭐⭐ (4.5/5)</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <div className="quantity">
          <button
            onClick={() => handleQuantityChange("decrement")}
            aria-label="Decrease Quantity"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increment")}
            aria-label="Increase Quantity"
          >
            +
          </button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </section>

      <section className="product-specifications" data-aos="fade-up">
  <h2>Specifications</h2>
  <ul className="spec-list">
    {product.dimensions && (
      <li>
        <strong>Dimensions:</strong> 
        <span>
          {`L: ${product.dimensions.length}, W: ${product.dimensions.width}, H: ${product.dimensions.height}`}
        </span>
      </li>
    )}
    <li>
      <strong>Weight:</strong> <span>{product.weight}</span>
    </li>
    <li>
      <strong>Color:</strong> <span>{product.color}</span>
    </li>
    <li>
      <strong>Materials:</strong> <span>{product.materials}</span>
    </li>
    <li>
      <strong>Packaging:</strong> <span>{product.packaging}</span>
    </li>
  </ul>
</section>

    </div>
  );
};

export default ProductDetailsPage;