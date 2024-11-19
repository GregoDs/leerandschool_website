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
            <p>#We are Leerand # We are Family</p>
          </div>
          <div className="we-image">
            <img
              src="/images/girlsfrontlawn2.jpg" // Replace with your actual image
              className="school-image"
            />
          </div>
        </div>
      </div>
      <div className="quote-section">
  <p className="quote-text">
    "The goal of early childhood education <br />  should be to activate the<br />
    child's own natural desire to learn."<br />
  </p>
  <p className="quote-author">  —  Maria Montessori </p>
</div>
<div className="campus-section">
      <div className="campus-description">
        <h1>Our Campuses</h1>
        <p>Explore our vibrant campuses, each offering unique learning environments designed to nurture growth, creativity, and excellence in every student.</p>
      </div>
      <div className="campus-images">
        <div className="campus">
          <img src="/images/mainCampus.jpeg" alt="Main Campus" />
          <h3>Main Campus</h3>
        </div>
        <div className="campus">
          <img src="/images/schoolcampuspark.jpg" alt="Second Campus" />
          <h3>Second Campus</h3>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Home;
