import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const cellStyle = {
    border: "1px solid #dee2e6",
    fontSize: "14px",
    minWidth: "120px",
    padding: "12px",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTabStyle = (tabName) => {
    return {
      cursor: "pointer",
      color: activeTab === tabName ? "#387ed1" : "#000",
      borderBottom: activeTab === tabName ? "2px solid #387ed1" : "none",
      paddingBottom: "10px",
      transition: "all 0.3s",
    };
  };

  return (
    <div className="container mt-5">
      {/* Navigation Tabs */}
      <div className="d-flex justify-content-start gap-4 mb-4 border-bottom flex-wrap">
        <h3
          className="fs-5 fs-md-3"
          style={getTabStyle("equity")}
          onClick={() => handleTabClick("equity")}
        >
          Equity
        </h3>
        <h3
          className="fs-5 fs-md-3"
          style={getTabStyle("currency")}
          onClick={() => handleTabClick("currency")}
        >
          Currency
        </h3>
        <h3
          className="fs-5 fs-md-3"
          style={getTabStyle("commodity")}
          onClick={() => handleTabClick("commodity")}
        >
          Commodity
        </h3>
      </div>

      {/* EQUITY TABLE */}
      {activeTab === "equity" && (
        <div className="table-responsive">
          <table
            className="table table-hover"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr className="table-light">
                <th style={cellStyle}>Category</th>
                <th style={cellStyle}>Equity delivery</th>
                <th style={cellStyle}>Equity intraday</th>
                <th style={cellStyle}>F&O - Futures</th>
                <th style={cellStyle}>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>Brokerage</td>
                <td style={cellStyle}>Zero Brokerage</td>
                <td style={cellStyle}>
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td style={cellStyle}>
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td style={cellStyle}>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td style={cellStyle}>STT/CTT</td>
                <td style={cellStyle}>0.1% on buy & sell</td>
                <td style={cellStyle}>0.025% on the sell side</td>
                <td style={cellStyle}>0.02% on the sell side</td>
                <td style={cellStyle}>
                  <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                    <li>
                      0.125% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>Transaction charges</td>
                <td style={cellStyle}>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td style={cellStyle}>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td style={cellStyle}>
                  NSE: 0.00173% <br /> BSE: 0
                </td>
                <td style={cellStyle}>
                  NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>GST</td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI <br /> charges + transaction <br />{" "}
                  charges)
                </td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI <br /> charges + transaction <br />{" "}
                  charges)
                </td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI <br /> charges + transaction <br />{" "}
                  charges)
                </td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI charges <br /> + transaction charges)
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>SEBI charges</td>
                <td style={cellStyle}>₹10 / crore</td>
                <td style={cellStyle}>₹10 / crore</td>
                <td style={cellStyle}>₹10 / crore</td>
                <td style={cellStyle}>₹10 / crore</td>
              </tr>
              <tr>
                <td style={cellStyle}>Stamp charges</td>
                <td style={cellStyle}>0.015% or ₹1500 / crore on buy side</td>
                <td style={cellStyle}>0.003% or ₹300 / crore on buy side</td>
                <td style={cellStyle}>0.002% or ₹200 / crore on buy side</td>
                <td style={cellStyle}>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* CURRENCY TABLE */}
      {activeTab === "currency" && (
        <div className="table-responsive">
          <table
            className="table table-hover"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr className="table-light">
                <th style={cellStyle}>Category</th>
                <th style={cellStyle}>Currency Futures</th>
                <th style={cellStyle}>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>Brokerage</td>
                <td style={cellStyle}>
                  0.03% or ₹ 20/executed order whichever is lower
                </td>
                <td style={cellStyle}>₹ 20/executed order</td>
              </tr>
              <tr>
                <td style={cellStyle}>STT/CTT</td>
                <td style={cellStyle}>No STT</td>
                <td style={cellStyle}>No STT</td>
              </tr>
              <tr>
                <td style={cellStyle}>Transaction charges</td>
                <td style={cellStyle}>
                  NSE: 0.0009% <br /> BSE: 0.00022%
                </td>
                <td style={cellStyle}>
                  NSE: 0.035% <br /> BSE: 0.001%
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>GST</td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>SEBI charges</td>
                <td style={cellStyle}>₹10 / crore</td>
                <td style={cellStyle}>₹10 / crore</td>
              </tr>
              <tr>
                <td style={cellStyle}>Stamp charges</td>
                <td style={cellStyle}>0.0001% or ₹10 / crore on buy side</td>
                <td style={cellStyle}>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* COMMODITY TABLE */}
      {activeTab === "commodity" && (
        <div className="table-responsive">
          <table
            className="table table-hover"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr className="table-light">
                <th style={cellStyle}>Category</th>
                <th style={cellStyle}>Commodity Futures</th>
                <th style={cellStyle}>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>Brokerage</td>
                <td style={cellStyle}>
                  0.03% or ₹ 20/executed order whichever is lower
                </td>
                <td style={cellStyle}>₹ 20/executed order</td>
              </tr>
              <tr>
                <td style={cellStyle}>STT/CTT</td>
                <td style={cellStyle}>0.01% on sell side (Non-Agri)</td>
                <td style={cellStyle}>0.05% on sell side</td>
              </tr>
              <tr>
                <td style={cellStyle}>Transaction charges</td>
                <td style={cellStyle}>MCX: 0.0026%</td>
                <td style={cellStyle}>MCX: 0.0026%</td>
              </tr>
              <tr>
                <td style={cellStyle}>GST</td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td style={cellStyle}>
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>SEBI charges</td>
                <td style={cellStyle}>₹10 / crore</td>
                <td style={cellStyle}>₹10 / crore</td>
              </tr>
              <tr>
                <td style={cellStyle}>Stamp charges</td>
                <td style={cellStyle}>0.002% or ₹200 / crore on buy side</td>
                <td style={cellStyle}>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-5 fs-5 p-3 text-center">
        <a href="#" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </div>
    </div>
  );
}

export default Brokerage;
