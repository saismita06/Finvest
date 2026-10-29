import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container p-3 p-md-5 text-center">
      <div className="row">
        <h2 className="fs-2">The FinVest Universe</h2>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-md-4 p-3 mt-md-5 mt-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "60%", maxWidth: "150px" }}
            alt="Fundhouse"
          />
          <p className="text-muted p-3" style={{ fontSize: "13px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-md-5 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "60%", maxWidth: "150px" }}
            alt="Sensibull"
          />
          <p className="text-muted p-3" style={{ fontSize: "13px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-md-5 mt-4">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "60%", maxWidth: "150px" }}
            alt="GoldenPi"
          />
          <p className="text-muted p-3" style={{ fontSize: "13px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-md-5 mt-4">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "60%", maxWidth: "150px" }}
            alt="Streak"
          />
          <p className="text-muted p-3" style={{ fontSize: "13px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-md-5 mt-4">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "60%", maxWidth: "150px" }}
            alt="Smallcase"
          />
          <p className="text-muted p-3" style={{ fontSize: "13px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-md-5 mt-4">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "60%", maxWidth: "150px" }}
            alt="Ditto"
          />
          <p className="text-muted p-3" style={{ fontSize: "13px" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="col-12">
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

export default Universe;
