import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-3 p-md-5 mb-5">
        <h1 className="fs-4 text-center">
          We pioneered the discount broking model in India. &nbsp;Now, we are
          breaking ground with our technology.
        </h1>
      </div>

      {/* Content Section */}
      <div className="row p-3 p-md-5 border-top text-muted">
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3 p-md-4">
          <p>
            FinVest was established with the goal of breaking all barriers that
            traders and investors face in terms of cost, market literacy, and
            technology. We named the platform FinVest — combining Financial
            empowerment with smart Investment tools.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-3 p-md-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
