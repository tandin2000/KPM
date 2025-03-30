import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { bgImgFromData } from "../../lib/helpers";
import { jarallax } from "jarallax";

const BannerOne = () => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <section className="banner-area">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="banner-content-wrapper">
              <div className="banner-content">
                <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                  <i className="fas fa-check-circle"></i> Trusted Since 2010
                </span>
                <h1 className="title wow fadeInUp" data-wow-delay=".4s">
                  Your Local Plumbing & Heating Experts in Metro Vancouver
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Experience exceptional service with our team of certified professionals. We deliver fast, reliable solutions for all your plumbing and heating needs.
                </p>
                <div className="banner-features wow fadeInUp" data-wow-delay=".8s">
                  <div className="feature-item">
                    <i className="fas fa-clock"></i>
                    <span>24/7 Emergency Service</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-certificate"></i>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-dollar-sign"></i>
                    <span>Competitive Pricing</span>
                  </div>
                </div>
                <div className="banner-btn">
                  <Link
                    to="/services"
                    className="btn btn-primary wow fadeInLeft"
                    data-wow-delay="1s"
                  >
                    View Our Services
                  </Link>
                  <Link
                    to="/estimate"
                    className="btn btn-outline wow fadeInRight"
                    data-wow-delay="1s"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-image-wrapper">
              <div className="banner-image jarallax" data-background="/img/banner/banner_bg.jpg">
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
