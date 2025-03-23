import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const IntroductionAreaOne = () => {
  return (
    <section id="intro" className="introduction-area pb-130">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="introduction-img-wrap">
              <img src="/img/images/introduction_img01.png" alt="" />
              <img
                src="/img/images/h3_about_img.png"
                data-aos="fade-right"
                alt=""
              />

            
            </div>
          </div>

          <div className="col-lg-6">
            <div className="introduction-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style2">
                <br/>
                <span className="sub-title">From Pipes to Perfection</span>
                <h3 className="title ">
                Your Go-To Plumbers In Burnaby
                </h3>
              </div>

              <p className="info-one">
              At KPM Plumbing & Heating, we take pride in being your trusted partner for all plumbing and heating solutions in the vibrant community of Burnaby, British Columbia. With a commitment to excellence, reliability, and customer satisfaction, our team of skilled professionals is dedicated to providing top-notch services for both residential and commercial needs. Whether you're facing a plumbing emergency, seeking heating installations, or requiring routine maintenance, We have the expertise to meet and exceed your expectations.
              </p>
            

              <br/>

              <div className="introduction-bottom">
                <Link to="/about" className="btn">
                  Discover MORE
                </Link>

                <span className="call-now">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel: 77 8707 7946"> 
                  77 8707 7946
                      </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionAreaOne;
