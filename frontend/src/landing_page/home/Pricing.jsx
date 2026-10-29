import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row p-3 p-md-5">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h3 className="mb-3 fs-2">Unbeatable pricing</h3>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 p-3 p-md-5">
          <div className="row text-center">
            <div className="col-4 border p-2 p-md-3">
              <h1 className="mb-3">₹0</h1>
              <p className="text-muted" style={{ fontSize: "12px" }}>
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>

            <div className="col-4 border p-2 p-md-3">
              <h1 className="mb-3">₹20</h1>
              <p className="text-muted" style={{ fontSize: "12px" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
