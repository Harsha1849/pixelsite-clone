// Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Product</h4>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
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
