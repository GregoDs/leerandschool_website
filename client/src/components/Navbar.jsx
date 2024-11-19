import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const [scrolled, setScrolled] = useState(false); // State for scroll detection

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  // Detect scroll position and change navbar style
  const handleScroll = () => {
    if (window.scrollY > 250) {
      setScrolled(true); // Change navbar background when scrolled past 50px
    } else {
      setScrolled(false); // Reset when scroll position is above 50px
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img
          src="/images/leerand-logo.png"
          alt="Leerand School"
          className="school-logo"
        />
        <div className="divider"></div>
        <div className="school-name">
          <h1>LEERAND SCHOOL</h1>
          <p>THIKA, KENYA</p>
        </div>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#our-school">our school</a></li>
        <li><a href="#education">education</a></li>
        <li><a href="#admissions">admissions</a></li>
        <li><a href="#school-life">school life</a></li>
        <li><a href="#visit-us">visit us</a></li>
      </ul>

      {/* Enquire button */}
      <button className="enquire-button">ENQUIRE NOW</button>
    </nav>
  );
}

export default Navbar;
