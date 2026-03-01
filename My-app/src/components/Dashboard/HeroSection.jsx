// src/components/Dashboard/HeroSection.jsx
import React from "react";
import "./HeroSection.css"; // optional, for styling

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center text-white">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Welcome to Our Store</h1>
        <p className="lead">Find the best deals on your favorite products!</p>
        <button className="btn btn-primary btn-lg mt-3">Shop Now</button>
      </div>
<div className="col-md-6 d-flex justify-content-center align-items-center">      
      <img src="https://img.freepik.com/premium-photo/ecommerce-background_965427-2217.jpg?w=2000" alt="Shopping"  className="img-fluid rounded me-3"  />
     
      </div>
    </section>
  );
};

export default HeroSection;