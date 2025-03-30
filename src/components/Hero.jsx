// Hero.jsx
import React from 'react';
import heroImage from '../assets/image/Group.png'; // Import the image

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Introduce Your Product Quickly & Effectively</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <a href="#" className="btn btn-primary">Purchase UI Kit</a>
            <a href="#" className="btn btn-secondary">Learn More</a>
          </div>
          <div className="col-lg-6 hero-image-container">
            <img src={heroImage} alt="App Feature Illustration" className="hero-image img-fluid" width="500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;