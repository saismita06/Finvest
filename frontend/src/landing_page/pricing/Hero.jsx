import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-3 p-md-5 text-center">
        <h1 className="fs-2">Charges</h1>
        <p className="text-muted fs-5">List of all charges and taxes</p>
      </div>

      <div className="row mt-0 mt-md-5">
        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="pricingEquity"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px" }}
          />
          <h3 className="fs-4">Free equity delivery</h3>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="intradayTrades"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px" }}
          />
          <h3 className="fs-4">Intraday and F&O trades</h3>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="pricingEquity"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px" }}
          />
          <h3 className="fs-4">Free direct MF</h3>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
