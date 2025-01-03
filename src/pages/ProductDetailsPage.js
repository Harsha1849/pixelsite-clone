import React from "react";
import { useParams } from "react-router-dom";
import "../components/ProductDetailsPage.css";

import products from "../data/products.json"; // Ensure this JSON contains your product details

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <img src={require(`../assets/images/${product.image}`)} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
