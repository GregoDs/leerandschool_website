import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { useEffect } from "react";


const Home = () => {
  const handleLearnMore = (path) => {
    window.location.href = path;
  };

  useEffect(() => {
    // Function to handle animations when sections come into view
    const revealElements = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Optional: stop observing once it becomes visible
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(el);
      });
    };

    revealElements();  // Initialize the observer on component mount

    // Cleanup observer on component unmount
    return () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.disconnect();
      });
    };
  }, []);  // The empty array ensures this effect runs only once

  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <div className="image-section">
          <div className="hero-text">
            <h1>Leerand Preparatory and Primary School</h1>
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
              At Leerand Preparatory and Primary School, we are committed to providing a nurturing and dynamic learning environment where children can thrive. We offer a curriculum designed to inspire curiosity, foster creativity, and build a solid foundation for academic success. Our dedicated team of educators believes in empowering each child to become a confident, independent, and compassionate individual.
            </p>
            <p>
              We strive to cultivate a love for learning, respect for diversity, and a sense of responsibility toward our community. With a focus on both academic excellence and personal growth, Leerand School aims to equip our students with the skills and mindset they need to succeed in the ever-changing world.
            </p>
            <p>#We are Leerand # We are Family</p>
          </div>
          <div className="we-image">
            <img
              src="/images/girlsfrontlawn2.jpg"
              alt="School Front Lawn"
              className="school-image"
            />
          </div>
        </div>
      </div>

      <div className="quote-section">
        <p className="quote-text">
          "The goal of early childhood education <br /> should be to activate the<br />
          child's own natural desire to learn."<br />
        </p>
        <p className="quote-author">— Maria Montessori</p>
      </div>

      
      <div className="school-info">
        <h2 className="school-info-title">Why Choose Our School?</h2>
        <p className="school-info-intro">
          At Leerand School, we are committed to fostering excellence in education through a values-driven approach. Our programs encourage curiosity, leadership, and a sense of responsibility to prepare students for a bright future.
        </p>
        <div className="info-grid">
          {[
            {
              href: "/history",
              imgSrc: "/images/history.png",
              title: "History of Leerand Preparatory and Primary School",
              text: "Leerand Preparatory and Primary School was founded in 1998 by Fr. Robert Vujs.",
            },
            {
              href: "/motto-mission-vision",
              imgSrc: "/images/multicultural_0.png",
              title: "Motto, Mission, Vision",
              text: "Leerand Preparatory and Primary is a Catholic-sponsored private school...",
            },
            {
              href: "/core-values",
              imgSrc: "/images/corevalues.png",
              title: "Core Values",
              text: "We believe that ALL students have the capability to learn at a high level...",
            },
            {
              href: "/school-programmes",
              imgSrc: "/images/schoolprogrammes.png",
              title: "School Programmes",
              text: "The aim of our school programmes is to develop pupils in a holistic way...",
            },
          ].map(({ href, imgSrc, title, text }) => (
            <a key={href} href={href} className="info-item">
              <img src={imgSrc} alt={`${title} Icon`} className="info-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="academic-stages">
  <h1 className="academic-stages-title">Academic Stages</h1>
  <div className="academic-stages-images">
    {[
      { src: "https://brookhurstschool.or.ke/wp-content/uploads/2023/08/preprep.jpg", label: "Preparatory", link: "/preparatory" },
      { src: "https://brookhurstschool.or.ke/wp-content/uploads/2024/11/prep.jpg", label: "Junior School", link: "/junior-school" },
      { src: "https://brookhurstschool.or.ke/wp-content/uploads/2024/01/high-school-1.jpg", label: "Senior School", link: "/senior-school" },
      { src: "https://brookhurstschool.or.ke/wp-content/uploads/2023/07/a-levels.jpg", label: "Boarding", link: "/boarding" }
    ].map(({ src, label, link }, index) => (
      <div key={index} className="academic-stage-item">
        <a href={link}>
          <img src={src} alt={label} />
          <div className="overlay">
            <p>{label}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>





  

</div>
  
);
};

export default Home;
