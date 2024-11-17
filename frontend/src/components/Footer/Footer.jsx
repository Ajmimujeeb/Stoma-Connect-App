import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section stay-in-know">
          <h4>Stay Connected</h4>
          <p>Sign up for updates on our latest products and nursing services.</p>
          <button className="signup-button">Sign up</button>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>Colostomy Bags</li>
            <li>Accessories</li>
            <li>Special Offers</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Nursing Services</h4>
          <ul>
            <li>Book an Appointment</li>
            <li>Find a Nurse</li>
            <li>Verified Care Providers</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>About StomaConnect</h4>
          <ul>
            <li>Our Story</li>
            <li>Customer Testimonials</li>
            <li>Blog</li>
            <li>Care & Support</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <p>Contact Us</p>
          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          We use cookies to provide you with the best experience on StomaConnect. To accept cookies, continue browsing as normal, or read more about our 
          <a href="/cookie-policy"> cookie policy</a> and <a href="/privacy-policy">privacy policy</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
