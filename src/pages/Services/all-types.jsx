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
          title={"All Types of Plumbing Fixture Installation"}
          subtitle={"All Types of Plumbing Fixture Installation"}
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
                                        <img src="/img/images/all-types.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <div class="elementor-element elementor-element-b79a791 elementor-widget elementor-widget-text-editor" data-id="b79a791" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>The Ringaway team of experts install all types of Fixture for commercial and residential properties in Aldergrove, Langley, Langley Township and Abbotsford Mission areas, Canada.</p><p><strong>List of Fixture as follows :</strong></p>								</div>
				</div>
        <ul>
    <li>Pipes</li>
    <li>Tapware</li>
    <li>Washbasins</li>
    <li>Bidets</li>
    <li>Bathtubs</li>
    <li>Urinals</li>
    <li>Hose Bib</li>
    <li>Terminal Valves</li>
    <li>Water Closet</li>
</ul>
<div class="elementor-element elementor-element-de47291 elementor-widget elementor-widget-text-editor" data-id="de47291" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>The Ringaway team is Red Seal certified for the insured installation of Fixture systems. We are covered for protection from accidents on the job site and ensure that no property damage is done during projects.</p><p><strong>Get in touch with our experts today!</strong></p>								</div>
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
