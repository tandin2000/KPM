import React from "react";
import cn from "classnames";

const HeaderTop = ({ className }) => {
  return (
    <div className={cn("header-top", className)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-top-left">
              <span>
                <i className="fas fa-fire-alt white"></i> Satisfaction Guaranteed! | <a href="tel: 77 8707 7946"> <i className="ml-10
                fa fa-phone"></i> 778 7077 946</a>
                

              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-top-right">
              <span>
                <i className="fas fa-map-marker-alt white"></i> Available for service in Metro Vancouver
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
