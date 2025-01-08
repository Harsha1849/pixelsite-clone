import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/googlepixel.jpg"; // Replace with your logo path

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Links */}
      <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li><a href="#phones">Phones</a></li>
          <li><a href="#earbuds">Earbuds</a></li>
          <li><a href="#watches">Watches</a></li>
          <li><a href="#accessories">Accessories</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>

      {/* Icons */}
      <div className="navbar-right">
        <i className="fas fa-search navbar-icon"></i>
        <Link to="/cart">
          <i className="fas fa-shopping-cart navbar-icon"></i>
        </Link>
        <i className="fas fa-user navbar-icon"></i>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
