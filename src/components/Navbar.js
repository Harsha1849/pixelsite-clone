import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/googlepixel.jpg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li><Link to="/phones">Phones</Link></li>
          <li><Link to="/earbuds">Earbuds</Link></li>
          <li><Link to="/watches">Watches</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/cart">
          <i className="fas fa-shopping-cart navbar-icon"></i>
        </Link>
        <Link to="/user">
          <i className="fas fa-user navbar-icon"></i>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
