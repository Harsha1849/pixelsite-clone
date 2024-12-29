import React from "react";
import "./ProductCards.css";
import pixel8 from "../assets/images/pixel8.jpg";
import pixel7Pro from "../assets/images/pixel7pro.jpg";
import pixel6a from "../assets/images/pixel6a.jpg";
import pixelBuds from "../assets/images/pixelbuds.jpg";
import pixelFold from "../assets/images/pixelfold.jpg";
import pixelWatch from "../assets/images/pixelwatch.jpg";
import pixelTablet from "../assets/images/pixeltab.jpg";
import accessories from "../assets/images/pixelaccessories.png";
import pixelCase from "../assets/images/pixelcase.jpg";
import pixelCharger from "../assets/images/pixelcharger.jpg";

const ProductCard = () => {
  const products = [
    { id: 1, name: "Pixel 8 Pro", image: pixel8, isNew: true, link: "/pixel-8-pro" },
    { id: 2, name: "Pixel 7 Pro", image: pixel7Pro, isNew: true, link: "/pixel-7-pro" },
    { id: 3, name: "Pixel 6a", image: pixel6a, isNew: true, link: "/pixel-6a" },
    { id: 4, name: "Pixel Buds", image: pixelBuds, link: "/pixel-buds" },
    { id: 5, name: "Pixel Fold", image: pixelFold, link: "/pixel-fold" },
    { id: 6, name: "Pixel Watch", image: pixelWatch, link: "/pixel-watch" },
    { id: 7, name: "Pixel Tablet", image: pixelTablet, link: "/pixel-tablet" },
    { id: 8, name: "Pixel Accessories", image: accessories, link: "/accessories" },
    { id: 9, name: "Pixel Case", image: pixelCase, link: "/pixel-case" },
    { id: 10, name: "Pixel Charger", image: pixelCharger, link: "/pixel-charger" },
  ];

  return (
    <div className="scrollable-card-container">
      {products.map((product) => (
        <a key={product.id} href={product.link} className="scrollable-card">
          {product.isNew && <span className="new-badge">New</span>}
          <img src={product.image} alt={product.name} className="card-image" />
          <h3 className="card-name">{product.name}</h3>
        </a>
      ))}
    </div>
  );
};

export default ProductCard;
