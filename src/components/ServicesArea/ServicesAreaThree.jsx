import React from "react";
import { Link } from "react-router-dom";

const ServicesAreaThree = () => {
  const services = [
    {
      icon: "fa-fire",
      title: "Furnace Repair & Installation",
      description: "Professional furnace repair, maintenance, and installation services. Expert technicians for all furnace types and brands.",
      link: "/furnace-repair",
      color: "#2B6CB0"
    },
    {
      icon: "fa-tint",
      title: "Swift Boiler Repair & Installation",
      description: "Fast and reliable boiler repair and installation services. Including emergency repairs and annual maintenance.",
      link: "/boiler-repair",
      color: "#4299E1"
    },
    // {
    //   icon: "fa-pipe",
    //   title: "Repiping Services",
    //   description: "Complete repiping solutions for homes and businesses. Using high-quality materials and professional installation.",
    //   link: "/repiping",
    //   color: "#ED8936"
    // },
    {
      icon: "fa-hot-tub",
      title: "Hot Water Heater Services",
      description: "Water heater repair, replacement, and maintenance. Expert service for all types of water heaters.",
      link: "/hot-water",
      color: "#48BB78"
    },
    {
      icon: "fa-water",
      title: "Water Main Services",
      description: "Water main repair and replacement services. Professional excavation and installation techniques.",
      link: "/water-main",
      color: "#9F7AEA"
    },
    {
      icon: "fa-shield-alt",
      title: "Fast & Secure Installation",
      description: "Quick and reliable installation services with guaranteed workmanship. Licensed and insured professionals.",
      link: "/fast",
      color: "#F56565"
    },
    {
      icon: "fa-tint-slash",
      title: "Drain Tile System Services",
      description: "Drain tile system cleaning, installation, and repair. Preventing water damage and foundation issues.",
      link: "/drain-tile",
      color: "#38B2AC"
    },
    // {
    //   icon: "fa-sewer",
    //   title: "Sewer & Drainage Services",
    //   description: "Comprehensive sewer and drainage maintenance. Regular cleaning and preventive care.",
    //   link: "/sewer",
    //   color: "#805AD5"
    // },
    {
      icon: "fa-stream",
      title: "Drainage System Services",
      description: "Complete drainage system repair and installation. Solving water flow and drainage issues.",
      link: "/drainage-repair",
      color: "#E53E3E"
    },
    {
      icon: "fa-sink",
      title: "Plumbing Fixture Installation",
      description: "Professional installation of all plumbing fixtures. Including sinks, toilets, faucets, and more.",
      link: "/all-types",
      color: "#2F855A"
    },
    {
      icon: "fa-video",
      title: "Camera Inspection",
      description: "Advanced camera inspection services for accurate diagnosis of plumbing issues. Quick and non-invasive.",
      link: "/camera",
      color: "#4A5568"
    }
  ];

  return (
    <section className="services-area">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">
            <i className="fas fa-star"></i> Our Services
          </span>
          <h2 className="title">
            Professional Plumbing & Heating Solutions
          </h2>
          <p className="description">
            From emergency repairs to complete installations, we provide comprehensive plumbing and heating services with guaranteed quality and customer satisfaction
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: service.color }}>
                <i className={`fas ${service.icon}`}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="service-hover" style={{ backgroundColor: service.color }}></div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Need Professional Plumbing Services?</h3>
            <p>Contact us today for expert assistance and get a free quote</p>
            <Link to="/estimate" className="btn btn-primary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaThree;
