import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea4 from "../../components/BreadcrumbArea/BreadcrumbArea4";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import { Link } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery/ImageGallery"


const ServicesDetailsPage = () => {
  useEffect(() => {
    //gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout  header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}>
        <BreadcrumbArea4
          title={"Hot Water Heater Replacement & Repair"}
          subtitle={"Hot Water Heater Replacement & Repair"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <div id="slider1" className="beer-slider" data-start="0">
              
                    {/* <BeforeAfterSlider
                      before={"/img/images/services_item_img04.jpg"}
                      after={"/img/images/after_img.jpg"}
                      
                    /> */}
                    <img src="/img/images/hotwater.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                    {/* <ImageGallery/> */}

                  </div>
              <div className="services-details-content">
                <br/>
                <div class="elementor-widget-container">
                <p>Imagine the inconvenience of a cold shower on a chilly morning or the frustration of waiting endlessly for water to heat up.<br/>A functional hot water heater is a crucial component of any home, ensuring comfort and convenience</p>
                <h3>Choosing Between Tank and Tankless Water Heaters:&nbsp;</h3>
                <p>When it comes to selecting a water heater for your home, one of the primary decisions you’ll face is whether to go with a traditional tank water heater or opt for the increasingly popular tankless option. Each type comes with its own set of advantages and considerations.</p>
                <p>Consider factors such as hot water demand, space availability, and energy efficiency to make an informed decision. Whether you opt for the reliability of a tank water heater or the on-demand convenience of a tankless system, investing in the right water heater ensures a consistent and comfortable supply of hot water for your home.</p>
                <h3>Signs Your Hot Water Heater Needs Replacement:</h3>
                <p>The first step in addressing hot water heater issues is recognizing the signs of a unit in distress. If you find rusty water, unusual noises, or inconsistent temperature, it might be time to consider a replacement. Ignoring these signs can lead to more significant problems and inconvenience in the long run.</p>								</div>

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
