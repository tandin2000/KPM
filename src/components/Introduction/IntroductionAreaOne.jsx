import React from "react";
import { Link } from "react-router-dom";

const IntroductionAreaOne = () => {
  return (
    <section className="intro-area">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-4">

        </div>
          <div className="col-lg-6">
            <div className="intro-content">
              <div className="section-title">
                <span className="sub-title">
                  <i className="fas fa-star"></i> Why Choose Us
                </span>
                <h2 className="title">
                  Experience Excellence in Every Service
                </h2>
              </div>
              <p className="intro-text">
                With over a decade of experience, we've built our reputation on quality service, professional expertise, and customer satisfaction. Our team of certified technicians is ready to handle any plumbing or heating challenge.
              </p>
              <div className="intro-features">
                <div className="feature-box">
                  <div className="icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  <div className="content">
                    <h3>Expert Technicians</h3>
                    <p>Licensed and certified professionals</p>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="content">
                    <h3>24/7 Service</h3>
                    <p>Emergency response available</p>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="icon">
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <div className="content">
                    <h3>Fair Pricing</h3>
                    <p>Transparent and competitive rates</p>
                  </div>
                </div>
              </div>
              <div className="intro-cta">
                <Link to="/services" className="btn btn-primary">
                  Explore Services
                </Link>
                <Link to="/estimate" className="btn btn-outline">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="intro-image-wrapper">
              <div className="main-image">
                <img src="/img/images/intro_img.jpg" alt="Plumbing Services" />
              </div>
              <div className="experience-badge">
                <span className="number">13+</span>
                <span className="text">Years of Experience</span>
              </div>
              <div className="floating-card card-1">
                <i className="fas fa-check-circle"></i>
                <span>Licensed & Insured</span>
              </div>
              <div className="floating-card card-2">
                <i className="fas fa-users"></i>
                <span>Expert Team</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default IntroductionAreaOne;
