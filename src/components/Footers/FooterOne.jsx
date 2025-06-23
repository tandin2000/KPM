import React from "react";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="footer-top">
          <div className="container">
           
<div className="row">
  <div className="col-md-3">
  <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Our Location</h4>
                  </div>
                 
                    <div className="footer-contact">
                    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.0549291076716!2d-123.02328440710966!3d49.250957525193265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676dcc9003fad%3A0x750932d7b2b5bdbf!2s3731%20Elmwood%20St%2C%20Burnaby%2C%20BC%20V5G%201R8%2C%20Canada!5e1!3m2!1sen!2slk!4v1742012229318!5m2!1sen!2slk"
        allowFullScreen
        loading="lazy"
      ></iframe> 
                  
                  </div>
                </div>
  </div>
  <div className="col-md-9">
    <div className="row">
      <div className="col-md-4">
      <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Working Hours</h4>
                  </div>
                  <div className="footer-content">
                   
                    <div className="footer-contact">
                    <p>
                    Available 24/7 </p>

                    <p>
                    <a href="tel:7787077946"> 
                    +1 (778) 707-7946
                      </a>
                    </p>
                    
                    </div>
                  </div>
                </div>
      </div>
      <div className="col-md-4">
      <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Office Hours:</h4>
                  </div>
                  <div className="footer-newsletter">
                   <p>
                   Monday to Friday: 9 AM - 5 PM <br/>
                   Saturday: 9 AM - 12 PM  <br/>
                   Sunday: Closed 
                    </p>
                  </div>
                </div>
</div>
<div className="col-md-4">
<div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Address</h4>
                    <p>
                    3731 Elmwood street <br/>Burnaby , V5G 1R8
                    </p>
                  </div>
                  <div className="fw-title">
                  <h4 className="title">Follow Us</h4>
                  </div>
                  <div className="social-links">
                 
            
                  <ul className="clearfix list-wrap flexicon">
                    <li target="blank" className="facebook">
                      <a href="https://www.facebook.com/profile.php?id=61561277386343&mibextid=wwXIfr&mibextid=wwXIfr">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li target="blank" className="instagram">
                      <a href="https://www.instagram.com/kpmplumbingheating?igsh=cmZqOWp0OXZjNnZu&utm_source=qr">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    {/* <li className="linkedin">
                      <a target="blank" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li> */}
                    <li className="whatsapp">
                      <a target="blank" href="https://wa.me/+17787077946">
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
                </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="footer-widget">
              <p>&#169;2025 <Link to="/">KPM Plumbing LTD.</Link> All Rights Reserved. </p>
            </div>
          </div>
          </div>
    </div>
  </div>
</div>
           
          </div>
        </div>

        {/* footer bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterOne;
