import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea3 from "../../components/BreadcrumbArea/BreadcrumbArea3";
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
        <BreadcrumbArea3
          title={"Drain Tile System Cleaning, Installation & Repair"}
          subtitle={"Drain Tile System Cleaning, Installation & Repair"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <center>
            <img src={'img/images/drain.jpg'} style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }}/>
            </center>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
                <p>Protect the foundation of your homes and keep the basements dry all year round. Drain tile systems enable excess water to drain away from the house and keep your premises clog-free.</p><p>Experts at KPM can replace outdated drainage systems with new drain tile systems. The team also performs a thorough inspection to detect the problem and eliminate it from the source.</p><p>Get reliable and cost-effective drain tile cleaning, repair or installation for optimal performance and longevity.</p><p>Get in touch with an expert near you!</p>								</div>
             

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
