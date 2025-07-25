import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="copyright-text">
              <p>
              <span style={{ fontSize: '10px', marginLeft: '10px' }}>
                <a href="https://invoicebuilder.onrender.com" style={{ fontSize: '10px', color: '#888' }} target="_blank" rel="noopener noreferrer">admin</a>
              </span>
              &nbsp; Maintained by <a href="https://orandbt.com">Orandbt</a> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
