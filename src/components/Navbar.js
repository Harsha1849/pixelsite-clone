import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/googlepixel.jpg";
import productsData from "../data/products.json"; // Assuming products.json is in a data folder.

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const matches = productsData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(matches);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
    setSearchTerm("");
    setFilteredProducts([]);
  };

  const handleUserClick = () => {
    navigate("/user");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/category/Phones">Phones</Link>
          </li>
          <li>
            <Link to="/category/Earbuds">Earbuds</Link>
          </li>
          <li>
            <Link to="/category/Watches">Watches</Link>
          </li>
          <li>
            <Link to="/category/Accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <i className="fas fa-search navbar-icon"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
          {filteredProducts.length > 0 && (
            <ul className="search-results">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link to="/cart">
          <i className="fas fa-shopping-cart navbar-icon"></i>
        </Link>
        <i className="fas fa-user navbar-icon" onClick={handleUserClick}></i>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;