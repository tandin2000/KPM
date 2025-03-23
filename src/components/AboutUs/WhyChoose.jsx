import React, { useEffect } from "react";
import { intersectingAnimation } from "../../lib/helpers";
import OdometerItem from "../Odometer/OdometerItem";

const AboutUs = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  return (
    <section className="about-area has-animation pt-30 wcu">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="about-img-wrap">
              <img
                src="/img/images/about_img01.jpg"
                className="wow fadeInLeft"
                data-wow-delay=".2s"
                alt=""
              />
           
             
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-content">
              <div className="section-title mb-25">
                

                <h2 className="title">
                Why Choose Us
                </h2>
                <br/>
                <p>Proudly based in Burnaby, we value the trust and support of our local community. Our reputation for reliability, professionalism, and quality service has made us a preferred choice among residents and businesses alike. Whatever your plumbing and heating needs may be, our team has the expertise to handle them with precision and care.</p>
              </div>

              <div className="introduction-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Dedicated to quality handyman work.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Home repairs handled with care.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Accurate fix, satisfaction guaranteed.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Save money on your repair projects.
                  </li>
                  
                   
                
                </ul>
              </div>

              <div className="contact">
                <span className="icon">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <a href="tel: 77 8707 7946"> 
                77 8707 7946
                      </a>
              </div>
            </div>
          </div>
        </div>
   
      </div>

    </section>
  );
};

export default AboutUs;
