import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center mt-3 mt-md-5 p-4 p-md-5">
        <h1 className="fs-2 fs-md-1 fw-medium">FinVest Products</h1>
        <p className="fs-5 text-muted mt-2">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="mt-2">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
