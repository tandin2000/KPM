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
          title={"Fast & Secure Installations"}
          subtitle={"Fast & Secure Installations"}
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
                    <img src="/img/images/fast.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
                <p>KPM Plumbing, Heating &amp; Cooling offers custom plumbing installation services for optimal functionality. We follow all sanitation and safety protocols during the plumbing installation, repair, and maintenance of fixtures, water heaters, showers, sinks, and more. This safeguards your commercial or residential property from costly repair.</p><p>Our experts install:</p>								</div>

                <ul class="elementor-icon-list-items" style={{listStyleType:'none'}}>
							<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Dishwashers</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Toilets</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Sinks</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Showers</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Bathtubs</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Pipes</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Water Heaters</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Drains</span>
									</li>
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
