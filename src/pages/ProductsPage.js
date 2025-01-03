import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import "../components/ProductsPage.css";

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredProducts = productsData.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="products-page">
      <h1>{category}</h1>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={require(`../assets/images/${product.image}`)} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
