import React from "react";
import "../styles/Footer.css"; // Ensure you have the styles updated in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top Section */}
      <div className="footer-top">
        <h2>Contact Us Today</h2>
        <hr className="divider" />
        <p>
          Find out how we can develop your child’s skills and expand their
          horizons for a life of success.
        </p>
        <button className="footer-button">Enquire Now</button>
      </div>

      {/* Footer Middle Section */}
      <div className="footer-bottom">
        <div className="footer-column logo-section">
          <img
            src="logo.png" // Replace this with the actual path to your logo
            alt="Leerand School Logo"
            className="footer-logo"
          />
          <h3>Leerand School</h3>
        </div>

        <div className="footer-column">
          <h3>Leerand School, Athena</h3>
          <p>Athena Rd</p>
          <p>Thika, Kenya</p>
          <p>+254 (0) 722 204 413</p>

          <h3>Leerand School, Ngoigwa</h3>
          <p>Ngoigwa</p>
          <p>Thika, Kenya</p>
        </div>

        <div className="footer-column">
          <p>
            <a href="#parent-portal-karen">Parent Portal - Athena Campus</a>
          </p>
          <p>
            <a href="#parent-portal-runda">Parent Portal - Ngoigwa Campus</a>
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/leerandschool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Additional Section */}
      <div className="footer-additional">
        <p>An Inspired School</p>
        <p>© 2024 Leerand School</p>
        <div className="footer-links">
          <a href="#cookies-policy">Cookies Policy</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-of-use">Website Terms of Use</a>
          <a href="#cookie-preferences">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
