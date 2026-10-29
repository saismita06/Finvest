import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-3">
      <div className="row text-center">
        <div className="col-12 p-3">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="mb-5 img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="col-12 p-3">
          <h1 className="mt-3 fs-2 fs-md-1">Invest in everything</h1>
          <p className="lead text-muted mt-2">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <div className="d-flex justify-content-center mt-4 mb-5 px-3">
            <Link to="/signup" className="btn btn-primary fs-5 py-2 signup-btn">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
