import React from "react";
import ContactForm from "./ContactForm";

const ContactPageArea = () => {
  return (
    <section className="contact-area pt-130 pb-130">
      <div className="container">
        <div className="inner-contact-info-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">

                <b> Office Number: </b> <a href="tel:+1"> 
                7787077946
                </a>
                
               
                <a href="mailto: " style={{fontSize:'15'}}>
                kpmplumbingandheating@gmail.com
                </a>
                 

                
                
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="content">
              
                <b>Available 24/7</b>
                
                <strong>Office working hours </strong>
                Monday to Friday: 9:00 AM – 5:00 PM
                Saturday: 9:00 AM – 12:00 PM <br/>
                Sunday: Closed 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="content">
                 
                3731 Elmwood street Burnaby , V5G 1R8
                <br/>
                <div className="social-links">
                <b>Follow Us</b>


                <ul className="clearfix list-wrap flexicon">
                    <li target="blank" className="facebook">
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li target="blank" className="instagram">
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a target="blank" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="whatsapp">
                      <a target="blank" href="">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    {/* <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li> */}
                  </ul>
          </div>
          <br/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <div className="row align-items-center g-0">
            <div className="col-lg-6">
              <div className="contact-img">
                <img src="/img/images/contact_img.png" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-content">
                <h2 className="title">Contact Us</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageArea;
