import React from "react";
import EstimateForm from "./EstimateForm";

const EstimateArea = () => {
  return (
    <section className="estimate-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="estimate-img-wrap">
              <img src="/img/images/estimate_img.jpg" alt="" />
              
              <div className="office-loction-wrap">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="loction-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <h2 className="title">Office</h2>
                        <p>3731 Elmwood street
                         ,<br/>
                         Burnaby , V5G 1R8</p>
                        <p>Phone  7787077946</p>
                        <br/>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="loction-item" >
                      <div className="icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="content">
                        <h2 className="title">Office Hours</h2>
                        <p>
                        Mon-Fri: <br/>9:00 am to 5:00 pm<br/>
                        Sat: 9:00 am to 1:00 pm<br/>
                        Sunday - Close 
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="estimate-form">
              <h2 className="title">New Service Request</h2>
              {/* form */}
              <EstimateForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateArea;
