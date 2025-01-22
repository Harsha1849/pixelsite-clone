import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../components/ProductDetailsPage.css";
import products from "../data/products.json";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div className="not-found">Product not found!</div>;
  }

  const handleAddToCart = () => {
    const payload = { productId: product.id, quantity };

    fetch("http://localhost:3001/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          setAddedToCart(true);
        } else {
          throw new Error("Failed to add to cart.");
        }
      })
      .catch((error) => console.error("Error adding to cart:", error));
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
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === 0 ? product.images.length - 1 : prev - 1
              )
            }
          >
            &lt;
          </button>
          <button
            className="arrow right-arrow"
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === product.images.length - 1 ? 0 : prev + 1
              )
            }
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
          <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
