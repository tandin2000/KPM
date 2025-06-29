import React from "react";
import FooterBottom from "./FooterBottom";
import { Link } from "react-router-dom";


const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="footer-info-wrap wow fadeInUp" data-wow-delay=".2s">
          <div className="container">
            <div className="footer-info-inner">
              <div className="row justify-content-center">
               
                <div className="col-lg-6 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5443 8.90191H23.103V12.4627C23.103 13.4419 23.9038 14.2431 24.8824 14.2431C25.8611 14.2431 26.6618 13.4419 26.6618 12.4627V8.90191H30.2206C31.1993 8.90191 32 8.10074 32 7.12153C32 6.14232 31.1993 5.34115 30.2206 5.34115H26.6618V1.78038C26.6618 0.801172 25.8611 0 24.8824 0C23.9038 0 23.103 0.801172 23.103 1.78038V5.34115H19.5443C18.5656 5.34115 17.7649 6.14232 17.7649 7.12153C17.7649 8.10074 18.5656 8.90191 19.5443 8.90191ZM28.8149 21.8453L24.2952 21.329C23.7638 21.2665 23.2251 21.3254 22.7197 21.5012C22.2143 21.6769 21.7552 21.965 21.377 22.3438L18.1029 25.6197C13.0516 23.0492 8.94581 18.9411 6.37676 13.887L9.66863 10.5933C10.4338 9.82771 10.8074 8.74167 10.6829 7.67345L10.1669 3.18688C10.0708 2.31804 9.65861 1.51493 9.0089 0.930516C8.35918 0.346106 7.51732 0.0212413 6.64367 0.0178038H3.56532C1.55461 0.0178038 -0.118021 1.69136 0.00653656 3.70319C0.949614 18.9077 13.1029 31.0499 28.2811 31.9935C30.2918 32.1181 31.9644 30.4445 31.9644 28.4327V25.3526C31.9822 23.5723 30.6121 22.0411 28.8149 21.8453V21.8453Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="title">Phone 24/7:</h4>
                      <a href="tel:+12892740648">+1 (289) 274-0648</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <svg
                        viewBox="0 0 30 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.6842 12.578C24.1316 12.578 24.5063 12.4276 24.8084 12.1268C25.1116 11.8249 25.2632 11.4513 25.2632 11.0058V7.86127H28.4211C28.8684 7.86127 29.2432 7.71033 29.5453 7.40846C29.8484 7.10764 30 6.73449 30 6.28902C30 5.84354 29.8484 5.46987 29.5453 5.168C29.2432 4.86718 28.8684 4.71676 28.4211 4.71676H25.2632V1.57225C25.2632 1.12678 25.1116 0.75311 24.8084 0.451237C24.5063 0.150412 24.1316 0 23.6842 0C23.2368 0 22.8621 0.150412 22.56 0.451237C22.2568 0.75311 22.1053 1.12678 22.1053 1.57225V4.71676H18.9474C18.5 4.71676 18.1253 4.86718 17.8232 5.168C17.52 5.46987 17.3684 5.84354 17.3684 6.28902C17.3684 6.73449 17.52 7.10764 17.8232 7.40846C18.1253 7.71033 18.5 7.86127 18.9474 7.86127H22.1053V11.0058C22.1053 11.4513 22.2568 11.8249 22.56 12.1268C22.8621 12.4276 23.2368 12.578 23.6842 12.578ZM12.6316 18.8671C13.5 18.8671 14.2437 18.5589 14.8626 17.9426C15.4805 17.3273 15.7895 16.5873 15.7895 15.7225C15.7895 14.8578 15.4805 14.1173 14.8626 13.5009C14.2437 12.8857 13.5 12.578 12.6316 12.578C11.7632 12.578 11.02 12.8857 10.4021 13.5009C9.78316 14.1173 9.47368 14.8578 9.47368 15.7225C9.47368 16.5873 9.78316 17.3273 10.4021 17.9426C11.02 18.5589 11.7632 18.8671 12.6316 18.8671ZM12.6316 34C12.4211 34 12.2105 33.9607 12 33.8821C11.7895 33.8035 11.6053 33.6987 11.4474 33.5676C7.60526 30.1873 4.73684 27.0496 2.84211 24.1545C0.947369 21.2584 0 18.5526 0 16.037C0 12.1064 1.27 8.97495 3.81 6.64277C6.34895 4.3106 9.28947 3.14451 12.6316 3.14451C12.8947 3.14451 13.1579 3.1508 13.4211 3.16338C13.6842 3.177 13.9474 3.19692 14.2105 3.22312V6.40694C13.9474 6.35453 13.6905 6.32151 13.44 6.30788C13.1905 6.29531 12.9211 6.28902 12.6316 6.28902C9.97368 6.28902 7.73 7.19935 5.90053 9.02002C4.07211 10.8417 3.15789 13.1807 3.15789 16.037C3.15789 17.8975 3.93421 20.0263 5.48684 22.4235C7.03947 24.8217 9.42105 27.4882 12.6316 30.4231C15.8421 27.4882 18.2237 24.8217 19.7763 22.4235C21.3289 20.0263 22.1053 17.8975 22.1053 16.037V15.7225H25.2632V16.037C25.2632 18.5526 24.3158 21.2584 22.4211 24.1545C20.5263 27.0496 17.6579 30.1873 13.8158 33.5676C13.6579 33.6987 13.4737 33.8035 13.2632 33.8821C13.0526 33.9607 12.8421 34 12.6316 34Z"
                          fill="currentcolor"
                        />
                      </svg> 
                    </div>
                    <div className="content">
                      <h4 className="title">Address</h4>
                      <span>5215 Finch Ave E, Unit 153,
                      Toronto, Ontario, M1S 0C2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="logo">
                  <Link to="/">
                    <img src="/img/logo/logo.png" alt="" />
                  </Link>
                </div>
                
                <div className="footer-social-menu">
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
          </div>
        </div>

        {/* footer bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterTwo;
