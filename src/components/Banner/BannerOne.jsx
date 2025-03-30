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
    <section
      className="banner-area jarallax banner-bg"
      data-background="/img/banner/banner_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <div className="banner-content">
             
            <br/>
              <br/>
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                Trusted Plumbing Experts Since 2010
              </span>
              <br/><br/>
              <h1 className="title wow fadeInUp" data-wow-delay=".4s">
                Professional Plumbing & Heating Services in Metro Vancouver
              </h1>

              <p className="wow fadeInUp" data-wow-delay=".6s">
                Your trusted partner for expert plumbing and heating solutions in Burnaby, BC. We provide 24/7 emergency services, professional installations, and reliable maintenance. Licensed, insured, and committed to excellence.
              </p>

              <div className="banner-btn">
                <Link
                  to="/services"
                  className="btn wow fadeInLeft"
                  data-wow-delay=".8s"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
