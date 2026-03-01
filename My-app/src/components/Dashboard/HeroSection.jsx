// src/components/Dashboard/HeroSection.jsx
import React from "react";
import "./HeroSection.css"; // optional, for styling

const HeroSection = () => {
  return (
    <section className="hero-section bg-dark text-center text-white margin-top-10 py-5">
      <div className="container text-center">
        <h1 className=" fw-bold text-center">Welcome to Our Store</h1>
        <p className="lead">Find the best deals on your favorite products!</p>
        <button className="btn btn-primary btn-lg mt-3 ">Shop Now</button>
      </div>

         <div className="floating-icons">
  <i className="bi bi-bag-heart icon icon1" style={{ top: "20%", left: "10%" }}></i>
  <i className="bi bi-cart icon icon2" style={{ top: "40%", left: "80%" }}></i>
  <i className="bi bi-handbag icon icon3" style={{ top: "60%", left: "30%" }}></i>
  <i className="bi bi-stars icon icon4" style={{ top: "30%", left: "50%" }}></i>
  <i className="bi bi-heart icon icon5" style={{ top: "70%", left: "70%" }}></i>
</div>
     
    
    </section>
  );
};

export default HeroSection;