import React, { useEffect } from "react";
import { bgImgFromData } from "../../lib/helpers";
import { Link } from "react-router-dom";

const BreadcrumbArea2 = ({ title, subtitle }) => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  return (
    <section
      className="breadcrumb-area breadcrumb-bg"
      data-background="/img/bg/breadcrumb_bg2.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h2 className="title">{title}</h2>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {subtitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbArea2;
