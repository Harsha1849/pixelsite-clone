import React from "react";
import "./Navbar.css";
import googleLogo from "../assets/images/googlepixel.jpg"; // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={googleLogo} alt="Google Logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><a href="#phones">Phones</a></li>
          <li><a href="#earbuds">Earbuds</a></li>
          <li><a href="#watches">Watches</a></li>
          <li><a href="#accessories">Accessories</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <i className="fas fa-search navbar-icon"></i>
        <i className="fas fa-shopping-cart navbar-icon"></i>
        <i className="fas fa-user navbar-icon"></i>
      </div>
    </nav>
  );
};

export default Navbar;
