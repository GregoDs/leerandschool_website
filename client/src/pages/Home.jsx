import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <div className="image-section">
          <div className="hero-text">
            <h1>Leerand Kindergarten and Primary School</h1>
            <p>Excellence in education and innovation</p>
            <button className="tour-button">Take a Tour</button>
          </div>
        </div>
      </div>
      <div className="we-section">
        <div className="we-content">
          <div className="we-text">
            <h2>We Are Leerand</h2>
            <p>
              At Leerand Kindergarten and Primary School, we are committed to providing a nurturing and dynamic learning environment where children can thrive. We offer a curriculum designed to inspire curiosity, foster creativity, and build a solid foundation for academic success. Our dedicated team of educators believes in empowering each child to become a confident, independent, and compassionate individual.
            </p>
            <p>
              We strive to cultivate a love for learning, respect for diversity, and a sense of responsibility toward our community. With a focus on both academic excellence and personal growth, Leerand School aims to equip our students with the skills and mindset they need to succeed in the ever-changing world.
            </p>
          </div>
          <div className="we-image">
            <img
              src="/images/school-building.jpg" // Replace with your actual image
              alt="Leerand School Building"
              className="school-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
