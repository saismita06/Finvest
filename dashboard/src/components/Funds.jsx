import React, { useState, useEffect } from "react";

const Funds = () => {
  // Load saved funds from localStorage, default to 4043.10
  const [availableMargin, setAvailableMargin] = useState(() => {
    const saved = localStorage.getItem("finvest_funds");
    return saved ? parseFloat(saved) : 4043.10;
  });

  const [usedMargin] = useState(3757.30);
  const [hasCommodity, setHasCommodity] = useState(() => {
    return localStorage.getItem("finvest_commodity") === "true";
  });

  // Modal States
  const [activeModal, setActiveModal] = useState(null); // 'add' | 'withdraw' | 'commodity' | null
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("finvest_funds", availableMargin.toString());
  }, [availableMargin]);

  useEffect(() => {
    localStorage.setItem("finvest_commodity", hasCommodity.toString());
  }, [hasCommodity]);

  const handleAddFunds = (e) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (!val || val <= 0) {
      setMessage("Please enter a valid amount!");
      return;
    }

    setAvailableMargin((prev) => prev + val);
    setMessage(`✅ Successfully added ₹${val.toLocaleString()} via UPI!`);
    setTimeout(() => {
      setMessage("");
      setAmount("");
      setActiveModal(null);
    }, 1200);
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (!val || val <= 0) {
      setMessage("Please enter a valid amount!");
      return;
    }
    if (val > availableMargin) {
      setMessage("❌ Insufficient available margin!");
      return;
    }

    setAvailableMargin((prev) => prev - val);
    setMessage(`✅ ₹${val.toLocaleString()} withdrawal initiated to your bank!`);
    setTimeout(() => {
      setMessage("");
      setAmount("");
      setActiveModal(null);
    }, 1200);
  };

  const handleActivateCommodity = () => {
    setHasCommodity(true);
    setActiveModal(null);
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="btn-container">
          <button
            className="btn btn-green"
            onClick={() => {
              setAmount("");
              setMessage("");
              setActiveModal("add");
            }}
            style={{ cursor: "pointer", border: "none" }}
          >
            Add funds
          </button>
          <button
            className="btn btn-blue"
            onClick={() => {
              setAmount("");
              setMessage("");
              setActiveModal("withdraw");
            }}
            style={{ cursor: "pointer", border: "none" }}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">
                {availableMargin.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">
                {usedMargin.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">
                {availableMargin.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>
                {(availableMargin - 4043.10 > 0
                  ? availableMargin - 4043.10
                  : 0
                ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            {hasCommodity ? (
              <div>
                <p style={{ color: "#27ae60", fontWeight: "bold" }}>
                  ✅ Commodity (MCX) Account Active
                </p>
                <div className="table" style={{ marginTop: "15px" }}>
                  <div className="data">
                    <p>Commodity Margin</p>
                    <p className="imp">0.00</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p>You don't have a commodity account</p>
                <button
                  className="btn btn-blue"
                  onClick={() => setActiveModal("commodity")}
                  style={{ cursor: "pointer", border: "none" }}
                >
                  Open Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── MODAL POPUP FOR ADD / WITHDRAW / COMMODITY ── */}
      {activeModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px 30px",
              borderRadius: "8px",
              width: "380px",
              maxWidth: "90%",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {activeModal === "add" && (
              <form onSubmit={handleAddFunds}>
                <h3 style={{ margin: "0 0 15px 0", color: "#333" }}>
                  Add Funds via UPI
                </h3>
                <p style={{ color: "#777", fontSize: "13px" }}>
                  Instant, zero-cost deposit to your trading account.
                </p>

                <div style={{ margin: "15px 0" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: "#555",
                      marginBottom: "6px",
                    }}
                  >
                    Enter Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    placeholder="e.g. 5000"
                    onChange={(e) => setAmount(e.target.value)}
                    autoFocus
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Preset Amount Badges */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
                  {[1000, 5000, 10000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset.toString())}
                      style={{
                        padding: "5px 10px",
                        fontSize: "12px",
                        backgroundColor: "#f0f4f9",
                        border: "1px solid #d0d7de",
                        borderRadius: "15px",
                        cursor: "pointer",
                      }}
                    >
                      +₹{preset.toLocaleString()}
                    </button>
                  ))}
                </div>

                {message && (
                  <p
                    style={{
                      color: message.startsWith("✅") ? "#27ae60" : "#e74c3c",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    {message}
                  </p>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#eee",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: "8px 18px",
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Deposit ₹{amount || "0"}
                  </button>
                </div>
              </form>
            )}

            {activeModal === "withdraw" && (
              <form onSubmit={handleWithdraw}>
                <h3 style={{ margin: "0 0 15px 0", color: "#333" }}>
                  Withdraw Funds
                </h3>
                <p style={{ color: "#777", fontSize: "13px" }}>
                  Withdrawable balance: ₹
                  {availableMargin.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>

                <div style={{ margin: "15px 0" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: "#555",
                      marginBottom: "6px",
                    }}
                  >
                    Withdrawal Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    placeholder="Enter amount"
                    onChange={(e) => setAmount(e.target.value)}
                    autoFocus
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {message && (
                  <p
                    style={{
                      color: message.startsWith("✅") ? "#27ae60" : "#e74c3c",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    {message}
                  </p>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#eee",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: "8px 18px",
                      backgroundColor: "#387ed1",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Withdraw
                  </button>
                </div>
              </form>
            )}

            {activeModal === "commodity" && (
              <div>
                <h3 style={{ margin: "0 0 15px 0", color: "#333" }}>
                  Activate Commodity Segment
                </h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.5" }}>
                  Trade in Crude Oil, Gold, Silver, Natural Gas, and Agri-commodities on MCX.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                    marginTop: "25px",
                  }}
                >
                  <button
                    onClick={() => setActiveModal(null)}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#eee",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleActivateCommodity}
                    style={{
                      padding: "8px 18px",
                      backgroundColor: "#387ed1",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Enable MCX Segment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;