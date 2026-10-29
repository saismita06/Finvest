import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-10">
          <h2 className="mt-5 fs-2 fs-md-1 fw-medium">
            Open a FinVest account
          </h2>
          <p className="mt-3 fs-5 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
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

export default OpenAccount;
