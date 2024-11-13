// Navbar.jsx
import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="/images/leerand-logo.png" alt="Leerand School" />
      </div>
      <ul className="navbar-links">
        <li><a href="#our-school">Our School</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#campuses">Campuses</a></li>
        <li><a href="#boarding">Boarding</a></li>
        <li><a href="#admissions">Admissions</a></li>
        <li><a href="#school-life">School Life</a></li>
        <li><a href="#visit-us">Visit Us</a></li>
      </ul>
      <button className="enquire-button">Enquire Now</button>
    </nav>
  );
}

export default Navbar;
