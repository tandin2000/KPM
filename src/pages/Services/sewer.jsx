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
									<p>We are reminded of the sewer and drainage systems only when problems occur. However, waiting for a problem can cost you heavily in the long run. The repair and energy bills can increase heavily due to this.</p>
<p>Ringaway team of experts conduct property inspection with electronic equipment to detect drain and sewer issues in the Aldergrove, Langley, Langley Township and Abbotsford Mission areas, Canada. We also use eco-friendly jet cleaning to eliminate water clogging and flooding obstructions.</p>
<p>Some of the sewer and drainage maintenance services in our arsenal include: </p>								</div>
             
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
