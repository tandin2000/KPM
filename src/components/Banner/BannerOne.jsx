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
              K P M Plumbing
              </span>
<br/><br/>
              <h1 className="title wow fadeInUp" data-wow-delay=".4s">
              Your Go-To Plumbers In Burnaby
              </h1>

              <p className="wow fadeInUp" data-wow-delay=".6s">
              K P M Plumbing LTD is taking care of plumbing, heating and related problems in the Aldergrove, Langley, Langley Township and Abbotsford Mission areas, Canada with utmost caution at cost-effective prices.
              </p>

              <div className="banner-btn">
               
               
               <Link
                  to="/services"
                  className="btn wow fadeInLeft"
                  data-wow-delay=".8s"
                >
                  Discover MORE
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
