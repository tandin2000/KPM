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
          title={"Repiping Services"}
          subtitle={"Repiping Services"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <center>
            <img src={'img/images/repiping.jpg'} style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }}/>
            </center>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
                <p>Transform your home with our expert repiping services in Burnaby. At KPM Plumbing, we specialize in providing homeowners with secure, efficient, and leak-free plumbing systems. Say goodbye to plumbing issues and hello to a worry-free living experience.</p><p>Our skilled technicians bring years of expertise to every project, ensuring a seamless and reliable repiping process. We understand the importance of a well-functioning plumbing system in your daily life, and our service is designed to deliver lasting results.</p><h2>Repiping Process:</h2><p>Transform your plumbing system with our meticulous repiping process.</p><p>Our skilled technicians handle every step with precision, ensuring a secure and efficient result. Enjoy leak-free living with our comprehensive repiping service.</p><p><strong>Benefits:</strong> Experience a seamless process that minimizes disruption, leading to a reliable and long-lasting plumbing system.</p><h2><b>Quality Materials:</b></h2><p>Invest in the longevity of your plumbing system with our use of quality materials in every repiping project. We prioritize durable and reliable materials, ensuring a secure and lasting solution for your home.</p><p>Our repiping service is not just about fixing pipes – it’s about transforming your home into a haven of security, efficiency, and leak-free living. We take pride in delivering excellence at every turn, ensuring your plumbing system meets the highest standards.</p><p><span >Call us at </span><a href="http://7787077946" data-wplink-url-error="true"><span ><strong>7787077946</strong></span></a> <span >or email </span><strong><span ><a  href="mailto:kpmplumbingandheating@gmail.com">kpmplumbingandheating@gmail.com</a></span></strong><span >&nbsp;to connect with our experts! </span></p>								</div>
             

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
