// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section py-4 bg-light text-muted" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <small>©2023 Yourcompany</small>
          <button className="btn btn-primary purchase-btn">Purchase now</button>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Contact</a>
            </li>
          </ul>
          <div className="social-icons">
            <i className="fab fa-facebook-f mx-2"></i>
            <i className="fab fa-linkedin-in mx-2"></i>
            <i className="fab fa-twitter mx-2"></i>
            <i className="fab fa-youtube mx-2"></i>
            <i className="fab fa-instagram mx-2"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
