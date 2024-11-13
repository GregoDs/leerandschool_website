// Home.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <div className="hero-text">
        </div>
      </div>
    </div>
  );
}

export default Home;
