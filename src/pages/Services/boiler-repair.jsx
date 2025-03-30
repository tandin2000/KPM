import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea2 from "../../components/BreadcrumbArea/BreadcrumbArea2";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import { Link } from "react-router-dom";



const ServicesDetailsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout  header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}>
        <BreadcrumbArea2
          title={"Swift Boiler Repair & Installation"}
          subtitle={"Swift Boiler Repair & Installation"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <div id="slider1" className="beer-slider" data-start="50">
              
                    {/* <BeforeAfterSlider
                      before={"/img/images/services_img02.jpg"}
                      after={"/img/images/after_img.jpg"}
                      
                    /> */}
                    <img src="/img/images/boiler.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
                  <h2>Expert Boiler Repair & Installation Services</h2>
                  <p>Keep your home or business comfortable with our professional boiler repair and installation services. Our certified technicians provide fast, reliable solutions for all your heating needs.</p>
                  
                  <h3>Why Choose Our Boiler Services?</h3>
                  <ul>
                    <li>Certified technicians with years of experience</li>
                    <li>Same-day emergency repair services</li>
                    <li>Energy-efficient boiler installations</li>
                    <li>Comprehensive maintenance programs</li>
                    <li>Competitive pricing and transparent quotes</li>
                  </ul>

                  <h3>Our Boiler Services Include:</h3>
                  <ul>
                    <li>Emergency boiler repairs</li>
                    <li>New boiler installation</li>
                    <li>Regular maintenance and servicing</li>
                    <li>Energy efficiency upgrades</li>
                    <li>Safety inspections and certifications</li>
                  </ul>

                  <p>We work with all major boiler brands and provide expert advice on choosing the right system for your needs. Our team ensures minimal disruption during installation and repair work.</p>

                  <h3>Benefits of Professional Boiler Services:</h3>
                  <ul>
                    <li>Improved energy efficiency and lower utility bills</li>
                    <li>Enhanced safety and reliability</li>
                    <li>Extended boiler lifespan</li>
                    <li>Reduced risk of breakdowns</li>
                    <li>Compliance with safety regulations</li>
                  </ul>

                  <p>Contact us today for a free consultation or emergency repair service. Our team is available 24/7 to handle any boiler-related emergencies.</p>
                </div>
             

             <br/>
             <Link to="/estimate" className="btn">
                        Request a Quote
                        </Link>

                            </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
        <br/>
      </Layout>
    </>
  );
};

export default ServicesDetailsPage;
