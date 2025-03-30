import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea4 from "../../components/BreadcrumbArea/BreadcrumbArea4";
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
        <BreadcrumbArea4
          title={"Sewer & Drainage Maintenance"}
          subtitle={"Sewer & Drainage Maintenance"}
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
                    <img src="/img/images/sewer.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
                  <h2>Professional Sewer & Drainage Maintenance Services</h2>
                  <p>Don't wait for sewer and drainage problems to become emergencies. Our expert team provides comprehensive maintenance and repair services to keep your property's drainage system in optimal condition.</p>
                  
                  <h3>Why Choose Our Sewer & Drainage Services?</h3>
                  <ul>
                    <li>Advanced electronic inspection equipment for accurate problem detection</li>
                    <li>Eco-friendly jet cleaning technology for efficient blockage removal</li>
                    <li>Preventive maintenance to avoid costly repairs</li>
                    <li>24/7 emergency response for urgent situations</li>
                    <li>Licensed and insured professionals</li>
                  </ul>

                  <p>Our service area includes Aldergrove, Langley, Langley Township, and Abbotsford Mission areas. We use state-of-the-art equipment and environmentally friendly methods to ensure your drainage system operates efficiently while minimizing environmental impact.</p>
                  
                  <h3>Our Comprehensive Services Include:</h3>
                  <ul>
                    <li>Regular maintenance and inspection</li>
                    <li>Blockage removal and cleaning</li>
                    <li>Drain repair and replacement</li>
                    <li>Sewer line inspection and repair</li>
                    <li>Emergency response services</li>
                  </ul>

                  <p>Contact us today for a professional assessment of your sewer and drainage system. Our team is ready to provide expert solutions tailored to your specific needs.</p>
                </div>
             
<ul>
    <li>Leader drain cleaning</li>
    <li>Flood drain cleaning</li>
    <li>Sump pumps</li>
    <li>Grease traps</li>
    <li>Toilets</li>
    <li>Storm drain cleaning</li>
    <li>Laundry tubs</li>
    <li>Underground leaks</li>
    <li>Kitchen & Bathroom sinks</li>
    <li>Sewer ejector pumps</li>
</ul>
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
