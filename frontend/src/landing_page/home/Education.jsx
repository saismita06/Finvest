import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <img
            src="media/images/education.svg"
            alt="education"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-12 col-md-6 p-3 p-md-5">
          <h3 className="fs-4 fs-md-3 mb-3">Free and open market education</h3>

          <p className="text-muted mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
