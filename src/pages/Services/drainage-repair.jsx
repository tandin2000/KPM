import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea1 from "../../components/BreadcrumbArea/BreadcrumbArea1";
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
        <BreadcrumbArea1
          title={"Drainage System Repair and Installation Services"}
          subtitle={"Drainage System Repair and Installation Services"}
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
                    <img src="/img/images/drainage-repair.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
                <p>It is no surprise that drainage systems fail to perform optimally after extensive use. Routine maintenance helps to keep a check of the drainage system functionality.</p><p>Experts at Ringaway can handle all types of small residential and large commercial drainage system maintenance, repair and replacement. The team is Red Seal certified to examine and repair indoor and outdoor drainage systems. We understand the damage caused by water to properties when drainage systems malfunction.</p><p>Some of the common signs of drainage system problems include:</p>								</div>
                <ul>
    <li>Basement flooding</li>
    <li>Gray crust on basement walls</li>
    <li>Cracks in the foundation</li>
    <li>Silt on driveways and walkways</li>
    <li>Flooded front lawns</li>
    <li>Water stains</li>
    <li>Displaced wood chips in the front and back yards</li>
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
        <BrandArea className={"inner-brand-area pb-70"} />
        <br/>
      </Layout>
    </>
  );
};

export default ServicesDetailsPage;
