import React from "react";

const appsList = [
  {
    name: "Smallcase",
    category: "Thematic Investing",
    badge: "Baskets",
    color: "#1877f2",
    description:
      "Invest in ideas, themes, and portfolios of stocks and ETFs created by SEBI-registered professionals.",
    link: "https://www.smallcase.com/",
  },
  {
    name: "Sensibull",
    category: "Options Trading",
    badge: "F&O",
    color: "#e67e22",
    description:
      "India's largest options trading platform. Analyze option chains, get trading strategies, and paper trade.",
    link: "https://web.sensibull.com/",
  },
  {
    name: "Streak",
    category: "Algo Trading",
    badge: "Automation",
    color: "#27ae60",
    description:
      "Create, backtest, and deploy algorithmic trading strategies without writing a single line of code.",
    link: "https://www.streak.tech/",
  },
  {
    name: "Tijori",
    category: "Fundamental Research",
    badge: "Insights",
    color: "#8e44ad",
    description:
      "Deep-dive research platform for Indian companies, sector-specific metrics, supply chain data, and financials.",
    link: "https://www.tijorifinance.com/",
  },
  {
    name: "Quicko",
    category: "Taxation",
    badge: "Tax Filing",
    color: "#e74c3c",
    description:
      "Seamlessly compute your trading capital gains, file your ITR, and optimize your taxes effortlessly.",
    link: "https://quicko.com/",
  },
  {
    name: "GoldenPi",
    category: "Fixed Income",
    badge: "Bonds & NCDs",
    color: "#f39c12",
    description:
      "Discover and invest in highly rated Corporate Bonds, Government Securities, and Fixed Deposits online.",
    link: "https://goldenpi.com/",
  },
];

const Apps = () => {
  return (
    <div style={{ padding: "20px 30px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", color: "#444", margin: "0 0 8px 0" }}>
          FinVest Apps & Ecosystem
        </h2>
        <p style={{ color: "#777", fontSize: "14px", margin: 0 }}>
          Supercharge your trading experience with trusted partner tools and integrations.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {appsList.map((app, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.03)";
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: app.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {app.name.charAt(0)}
                </div>

                <span
                  style={{
                    backgroundColor: "#f0f4f9",
                    color: "#387ed1",
                    fontSize: "12px",
                    fontWeight: "600",
                    padding: "4px 10px",
                    borderRadius: "20px",
                  }}
                >
                  {app.badge}
                </span>
              </div>

              <h4 style={{ margin: "0 0 4px 0", fontSize: "18px", color: "#222" }}>
                {app.name}
              </h4>
              <span style={{ fontSize: "12px", color: "#888", fontWeight: "500" }}>
                {app.category}
              </span>

              <p
                style={{
                  color: "#666",
                  fontSize: "13.5px",
                  lineHeight: "1.5",
                  marginTop: "12px",
                  marginBottom: "20px",
                }}
              >
                {app.description}
              </p>
            </div>

            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                textAlign: "center",
                backgroundColor: "#387ed1",
                color: "#fff",
                padding: "9px 16px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Launch App ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;