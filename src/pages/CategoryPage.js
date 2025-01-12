import React from "react";
import products from "../data/products.json";
import { Link } from "react-router-dom";
import "../components/CategoryPage.css";

const CategoryPage = ({ category }) => {
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="category-page">
      <h1>{category}</h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={require(`../assets/images/${product.images[0]}`)} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link to={`/${product.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
