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
          title={"Camera inspection"}
          subtitle={"Camera inspection"}
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
                    <img src="/img/images/camera.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
									<p>Do you have a problem with your sewer or drain pipes, but you don’t know where it is or what is causing it? If so, you need a camera inspection service from the experts at KPM. A camera inspection service is a fast, accurate, and non-invasive way to diagnose and locate any issues with your pipes, such as clogs, cracks, leaks, roots, or corrosion.</p><p>Whether you need a camera inspection service for your home or business, trust the experts at KPM. We have the experience, skills, and equipment to handle any camera inspection project, big or small. We use state-of-the-art technology and techniques to ensure that you get the best results possible. We also offer a detailed report and video recording of our findings for your reference.</p><p><span >Call us at </span><span ><strong>7787077946</strong></span> <span >or email </span><strong><span ><a  href="mailto:kpmplumbingandheating@gmail.com">kpmplumbingandheating@gmail.com</a></span></strong><span >&nbsp;to connect with our experts! </span></p>								</div>
             

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
