import React from "react";

function Charges() {
  const cellStyle = {
    border: "1px solid #dee2e6",
    fontSize: "14px",
    verticalAlign: "middle",
  };

  const badgeStyle = {
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    borderRadius: "3px",
    display: "inline-block",
    padding: "2px 10px",
    margin: "0",
  };

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-12">
          <h4 className="p-2 fs-5 fs-md-4">Charges for account opening</h4>
          <div className="table-responsive">
            <table
              className="table table-bordered text-muted"
              style={{ borderCollapse: "collapse" }}
            >
              <thead className="table-light">
                <tr>
                  <th style={cellStyle}>Type of account</th>
                  <th style={cellStyle}>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>Online account</td>
                  <td style={cellStyle}>
                    <span style={badgeStyle}>Free</span>
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle}>Offline account</td>
                  <td style={cellStyle}>
                    <span style={badgeStyle}>Free</span>
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle}>NRI account (offline only)</td>
                  <td style={cellStyle}>₹ 500</td>
                </tr>
                <tr>
                  <td style={cellStyle}>
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td style={cellStyle}>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AMC Charges */}
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <h4 className="p-2 fs-5 fs-md-4">
            Demat AMC (Annual Maintenance Charge)
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered text-muted">
              <thead className="table-light">
                <tr>
                  <th style={cellStyle}>Value of holdings</th>
                  <th style={cellStyle}>AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>Up to ₹4 lakh</td>
                  <td style={cellStyle}>
                    <span style={badgeStyle}>Free</span>
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle}>₹4 lakh - ₹10 lakh</td>
                  <td style={cellStyle}>₹ 100 per year, charged quarterly*</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Above ₹10 lakh</td>
                  <td style={cellStyle}>₹ 300 per year, charged quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted mt-2">
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account. To learn more about BSDA,{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              click here.
            </a>
          </p>
        </div>
      </div>

      {/* Optional Services */}
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <h4 className="p-2 fs-5 fs-md-4">
            Charges for optional value added services
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered text-muted">
              <thead className="table-light">
                <tr>
                  <th style={cellStyle}>Service</th>
                  <th style={cellStyle}>Billing Frequency</th>
                  <th style={cellStyle}>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>Tickertape</td>
                  <td style={cellStyle}>Monthly / Annual</td>
                  <td style={cellStyle}>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Smallcase</td>
                  <td style={cellStyle}>Per transaction</td>
                  <td style={cellStyle}>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Kite Connect</td>
                  <td style={cellStyle}>Monthly</td>
                  <td style={cellStyle}>Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Charges Explained Section */}
      <div className="row mt-5">
        <div className="col-12 mb-4">
          <h3 className="mb-4 fs-4">Charges explained</h3>
        </div>

        {/* Left Column Explanation */}
        <div className="col-12 col-md-6 pe-md-5 mb-4">
          <h6 className="mb-2 text-dark">
            Securities/Commodities transaction tax
          </h6>
          <p className="text-muted small">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="text-muted small">
            When trading at FinVest, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h6 className="mt-4 text-dark">Transaction/Turnover Charges</h6>
          <p className="text-muted small">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="text-muted small">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="text-muted small">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>

          <h6 className="mt-4 text-dark">Stamp charges</h6>
          <p className="text-muted small">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h6 className="mt-4 text-dark">NRI brokerage charges</h6>
          <ul className="text-muted small ps-3">
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <h6 className="mt-4 text-dark">Account with debit balance</h6>
          <p className="text-muted small">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
        </div>

        {/* Right Column Explanation */}
        <div className="col-12 col-md-6 ps-md-5">
          <h6 className="mb-2 text-dark">GST</h6>
          <p className="text-muted small">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <h6 className="mt-4 text-dark">SEBI Charges</h6>
          <p className="text-muted small">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h6 className="mt-4 text-dark">
            DP (Depository participant) charges
          </h6>
          <p className="text-muted small">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 FinVest fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="text-muted small">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>

          <h6 className="mt-4 text-dark">Pledging charges</h6>
          <p className="text-muted small">
            ₹30 + GST per pledge request per ISIN.
          </p>

          <h6 className="mt-4 text-dark">AMC (Account maintenance charges)</h6>
          <p className="text-muted small">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000.
          </p>
          <p className="text-muted small">
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days).
          </p>

          <h6 className="mt-4 text-dark">Corporate action order charges</h6>
          <p className="text-muted small">
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <h6 className="mt-4 text-dark">Off-market transfer charges</h6>
          <p className="text-muted small">₹25 per transaction.</p>

          <h6 className="mt-4 text-dark">Payment gateway charges</h6>
          <p className="text-muted small">
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="row my-5">
        <div className="col-12">
          <p className="text-muted small">
            <strong>Disclaimer:</strong> For Delivery based trades, a minimum of
            ₹0.01 will be charged per contract note. Clients who opt to receive
            physical contract notes will be charged ₹20 per contract note plus
            courier charges. Brokerage will not exceed the rates specified by
            SEBI and the exchanges. All statutory and regulatory charges will be
            levied at actuals. Brokerage is also charged on expired, exercised,
            and assigned options contracts. Free investments are available only
            for our retail individual clients. Companies, Partnerships, Trusts,
            and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charges;
