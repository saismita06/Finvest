import React from "react";

function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <img
              src="media/images/logo.svg"
              style={{ width: "130px" }}
              alt="FinVest Logo"
            />
            <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
              &copy; 2010 - 2026, FinVest Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <p className="fw-bold mb-3">Account</p>
            <nav
              className="d-flex flex-column gap-2 footer-links"
              style={{ fontSize: "0.9rem" }}
            >
              <a href="#" className="text-decoration-none text-muted">
                Open demat account
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Minor demat account
              </a>
              <a href="#" className="text-decoration-none text-muted">
                NRI demat account
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Commodity
              </a>
              <a href="#" className="text-decoration-none text-muted">
                MTF
              </a>
            </nav>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <p className="fw-bold mb-3">Support</p>
            <nav
              className="d-flex flex-column gap-2 footer-links"
              style={{ fontSize: "0.9rem" }}
            >
              <a href="#" className="text-decoration-none text-muted">
                Contact us
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Support portal
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Z-Connect blog
              </a>
              <a href="#" className="text-decoration-none text-muted">
                List of charges
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Downloads
              </a>
            </nav>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <p className="fw-bold mb-3">Company</p>
            <nav
              className="d-flex flex-column gap-2 footer-links"
              style={{ fontSize: "0.9rem" }}
            >
              <a href="#" className="text-decoration-none text-muted">
                About
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Philosophy
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Press & media
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Careers
              </a>
              <a href="#" className="text-decoration-none text-muted">
                FinVest.tech
              </a>
            </nav>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <p className="fw-bold mb-3">Quick links</p>
            <nav
              className="d-flex flex-column gap-2 footer-links"
              style={{ fontSize: "0.9rem" }}
            >
              <a href="#" className="text-decoration-none text-muted">
                Upcoming IPOs
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Market holidays
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Calculators
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Markets
              </a>
            </nav>
          </div>
        </div>

        <div
          className="mt-5 py-4 text-muted border-top"
          style={{ fontSize: "0.7rem", lineHeight: "1.6" }}
        >
          <p>
            FinVest Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through FinVest
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets."
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center">
            <a href="#" className="text-decoration-none">
              NSE
            </a>
            <a href="#" className="text-decoration-none">
              BSE
            </a>
            <a href="#" className="text-decoration-none">
              MCX
            </a>
            <a href="#" className="text-decoration-none">
              Terms & Conditions
            </a>
            <a href="#" className="text-decoration-none">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
