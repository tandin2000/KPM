import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea1 from "../../components/BreadcrumbArea/BreadcrumbArea1";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import { Link } from "react-router-dom";
//import ImageGallery from "../../components/ImageGallery/ImageGallery"


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
          title={"Furnace Repair & Installation"}
          subtitle={"Furnace Repair & Installation"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
              <center>
            <img src={'img/images/furnace.jpg'} style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }}/>
            </center>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
									<h2>Furnace Repair &amp; Installation In Burnaby, BC</h2>
<div>&nbsp;</div>
<p>Winters in Burnaby, BC, are a magical time, but the real magic happens when your furnace is working flawlessly.</p>
<p>Our experts can fix all types of furnace-related problems. We help to check carbon monoxide levels that significantly affect your energy bills.</p>
<h3>The Importance of Timely Furnace Repair:</h3>
<p>Unexpected breakdowns can turn a cozy evening into a freezing nightmare. Furnace malfunctions often occur when you least expect them. Discover why prompt furnace repair is crucial to avoid discomfort and ensure your heating system operates at its peak efficiency.</p>
<h3>Signs Your Furnace Needs Immediate Attention:</h3>
<p>Is your furnace trying to communicate with you? Understanding the signs of a faltering furnace is the first step to preventing major breakdowns. From strange noises to uneven heating, learn to identify these signs and take action before it’s too late.</p>
<h3>Why Choose Us?</h3>
<p>Our team conducts an inspection to determine if your furnace requires replacement or repair. We can install new natural gas high-efficiency furnaces, and upgrade high-efficiency heating systems. You can save up to 37% on your energy bills with our professional services.</p>
<p>We take care of all types of furnaces and upgrade temperature stabilization for maximum energy efficiency. Some of the common types of furnaces include single-stage furnaces, dual-stage furnaces, and variable furnaces.</p>
<p>Our team follows the golden rule that if your furnace repair exceeds 50% of the heating system value, new equipment is appropriate in such cases.</p>								</div>

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
