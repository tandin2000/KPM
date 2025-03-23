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
          title={"Water Main Replacement & Repair"}
          subtitle={"Water Main Replacement & Repair"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <center>
            <img src={'img/images/water-main.jpg'} style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }}/>
            </center>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
									<p>At KPM Plumbing &amp; Heating, we pride ourselves on revolutionizing traditional water main replacement methods. Unlike others, we don’t dig! Our experts follow a holistic, hygienic, and trenchless water main replacement technique that sets us apart in the industry.</p><h2>Trenchless Water Main Replacement Technique In Burnaby, BC</h2><p>Our cutting-edge trenchless water main replacement technique offers numerous advantages. It’s not just cost-effective; it’s a non-invasive solution that eliminates the need for open-cut water lines, involves zero excavation, and is 100% eco-friendly. Furthermore, our method requires limited setup space and ensures a swift completion of the project.</p><p>At KPM Plumbing &amp; Heating, we believe in providing efficient solutions that prioritize both your time and the environment.</p><h2>Addressing Water Line Issues</h2><p>We understand that higher energy bills often signal underlying issues with water lines. Our dedicated drainage and sewer team specializes in installing, repairing, and maintaining water main lines.</p><p>Whether it’s a new installation or fixing leaks, you can trust our experts to deliver top-notch service.</p><h2>Trustworthy Water Main Line Servicing</h2><p>We respect your property and budget, and that’s why our no-dig technique with pipe bursting technology stands out. This innovative approach allows our team to replace underground main water lines without causing any damage to your property. We prioritize a seamless and hassle-free experience for our clients.</p><h2>Why Choose Us for Water Main Replacement in Burnaby:</h2><p><br/>With years of experience serving the Burnaby community, we have established ourselves as a trusted provider of water main replacement services. Our skilled professionals are dedicated to delivering superior results, backed by a commitment to excellence and customer satisfaction. Whether it’s a residential neighborhood or a commercial district, we have the expertise and resources to handle projects of any scale with precision and professionalism.</p>								</div>
             

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
