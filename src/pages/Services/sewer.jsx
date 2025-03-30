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
      <Layout header={1} footer={1} headerClassName={"header-style-two"} topHeaderClassName={"header-top-two"}>
        <BreadcrumbArea4 title={"Sewer & Drainage Maintenance"} subtitle={"Expert Solutions"} />
        
        <section className="services-details-area pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-details-content">
                  <div className="service-header">
                    <h2 className="service-title">Professional Sewer & Drainage Maintenance</h2>
                    <div className="service-badges">
                      <span className="badge"><i className="fas fa-clock"></i> 24/7 Service</span>
                      <span className="badge"><i className="fas fa-certificate"></i> Licensed</span>
                      <span className="badge"><i className="fas fa-shield-alt"></i> Insured</span>
                    </div>
                  </div>

                  <div className="service-image">
                    <img src="/img/images/sewer.jpg" alt="Sewer and Drainage Services" className="img-fluid rounded" />
                  </div>

                  <div className="service-description">
                    <p>Don't wait for sewer and drainage problems to become emergencies. Our expert team provides comprehensive maintenance and repair services to keep your property's drainage system in optimal condition.</p>
                  </div>

                  <div className="service-features">
                    <div className="feature-card">
                      <i className="fas fa-tools"></i>
                      <h3>Advanced Equipment</h3>
                      <p>State-of-the-art electronic inspection and jet cleaning technology</p>
                    </div>
                    <div className="feature-card">
                      <i className="fas fa-leaf"></i>
                      <h3>Eco-Friendly</h3>
                      <p>Environmentally conscious cleaning methods</p>
                    </div>
                    <div className="feature-card">
                      <i className="fas fa-clock"></i>
                      <h3>Quick Response</h3>
                      <p>24/7 emergency service available</p>
                    </div>
                  </div>

                  <div className="service-details">
                    <h3>Our Comprehensive Services</h3>
                    <div className="service-grid">
                      <div className="service-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Regular maintenance and inspection</span>
                      </div>
                      <div className="service-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Blockage removal and cleaning</span>
                      </div>
                      <div className="service-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Drain repair and replacement</span>
                      </div>
                      <div className="service-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Sewer line inspection and repair</span>
                      </div>
                      <div className="service-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Emergency response services</span>
                      </div>
                    </div>
                  </div>

                  <div className="service-cta">
                    <Link to="/estimate" className="btn btn-primary">
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="sidebar-card">
                    <h3>Service Areas</h3>
                    <ul className="service-areas">
                      <li><i className="fas fa-map-marker-alt"></i> Burnaby</li>
                      <li><i className="fas fa-map-marker-alt"></i> Vancouver</li>
                      <li><i className="fas fa-map-marker-alt"></i> New Westminster</li>
                    </ul>
                  </div>

                  <div className="sidebar-card">
                    <h3>Why Choose Us</h3>
                    <ul className="benefits-list">
                      <li><i className="fas fa-check"></i> Licensed & Insured</li>
                      <li><i className="fas fa-check"></i> Experienced Team</li>
                      <li><i className="fas fa-check"></i> Competitive Pricing</li>
                      <li><i className="fas fa-check"></i> 24/7 Emergency Service</li>
                    </ul>
                  </div>

                  <div className="sidebar-card contact-card">
                    <h3>Need Help?</h3>
                    <p>Contact us for immediate assistance</p>
                    <a href="tel:+1234567890" className="btn btn-outline">
                      <i className="fas fa-phone"></i> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServicesDetailsPage;
