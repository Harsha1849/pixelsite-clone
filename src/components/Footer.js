import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Product</h4>
          <ul className="footer-links">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Cloud Pricing</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Stay Connected</h4>
          <div className="social-icons">
            <a href="#facebook"><FaFacebook size={24} /></a>
            <a href="#twitter"><FaTwitter size={24} /></a>
            <a href="#instagram"><FaInstagram size={24} /></a>
            <a href="#linkedin"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
