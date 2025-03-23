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
                <h2>Swift Boiler Repair &amp; Installation in Burnaby BC:</h2><p>When it comes to ensuring your home’s comfort, a well-functioning boiler is non-negotiable. In Burnaby BC, our premier boiler repair services guarantee a seamless heating experience, putting your worries to rest.</p><p>We understand the importance of a budget-friendly approach without compromising on quality. Trust us to provide expert solutions without breaking the bank.</p><h3>Swift Solutions for Boiler Troubles:</h3><p>Discovering issues with your boiler can be stressful, especially during colder seasons. Our expert technicians in Burnaby BC prioritize swift solutions. From minor adjustments to complex repairs, we handle it all efficiently, ensuring your heating system is up and running without unnecessary delays.</p><h3>24/7 Emergency Support:</h3><p>Boiler emergencies don’t adhere to a 9-to-5 schedule, and neither do we. Our Burnaby BC team offers 24/7 emergency support, ready to tackle unexpected issues whenever they arise. Your comfort is our priority, day or night.</p><h3>Why Choose Our Boiler Repair Services?</h3><ul><li><strong>Proven Track Record:</strong> With a history of successful repairs, we bring a wealth of experience to every service call in Burnaby BC and nearby areas.</li><li><strong>Licensed Technicians:</strong> Our skilled and licensed technicians ensure that every repair meets the highest industry standards, giving you peace of mind.</li><li><strong>Transparent Pricing:</strong> No hidden fees. Our Burnaby BC boiler repair services come with transparent pricing, providing clarity from start to finish.</li></ul><p>&nbsp;</p><p>In Burnaby BC, our boiler repair services stand out for their efficiency, affordability, and reliability. Trust us to keep your home warm and comfortable, no matter the season.</p><div>&nbsp;</div>								</div>
             

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
        <BrandArea className={"inner-brand-area pb-70"} />
        <br/>
      </Layout>
    </>
  );
};

export default ServicesDetailsPage;
