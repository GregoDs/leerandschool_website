import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const [visible, setVisible] = useState(true); // State for navbar visibility
  const [scrolled, setScrolled] = useState(false); // State for background change on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 250) {
      // Scrolling down and past a threshold
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }

    if (currentScrollY > 250) {
      setScrolled(true); // Change navbar background when scrolled
    } else {
      setScrolled(false); // Reset navbar background
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${visible ? "visible" : "hidden"}`}
    >
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
        <li>
          <a href="#our-school">our school</a>
        </li>
        <li>
          <a href="#education">education</a>
        </li>
        <li>
          <a href="#admissions">admissions</a>
        </li>
        <li>
          <a href="#school-life">school life</a>
        </li>
        <li>
          <a href="#visit-us">visit us</a>
        </li>
      </ul>

      {/* Enquire button */}
      <button className="enquire-button">ENQUIRE NOW</button>
    </nav>
  );
}

export default Navbar;
