import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { VerticalChart } from "./VerticalChart";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  const { tradeSignal } = useContext(GeneralContext);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3002";
        const res = await axios.get(
          `${backendUrl}/allHoldings`,
          { withCredentials: true },
        );
        if (Array.isArray(res.data)) {
          setAllHoldings(res.data);
        } else {
          setAllHoldings([]);
        }
      } catch (error) {
        console.error("Failed to fetch holdings", error);
        setAllHoldings([]);
      }
    };

    fetchHoldings();
  }, [tradeSignal]);

  // Safe array fallback so .reduce and .map never crash
  const holdingsList = Array.isArray(allHoldings) ? allHoldings : [];

  const totalInvestment = holdingsList.reduce((acc, stock) => {
    const avgCost = stock.avg || stock.price || 0;
    const qty = stock.qty || 0;
    return acc + avgCost * qty;
  }, 0);

  const currentValue = holdingsList.reduce((acc, stock) => {
    const price = stock.price || 0;
    const qty = stock.qty || 0;
    return acc + price * qty;
  }, 0);

  const totalPnl = currentValue - totalInvestment;
  const pnlPercentage =
    totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;
  const totalPnlClass = totalPnl >= 0 ? "profit" : "loss";

  const labels = holdingsList.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdingsList.map((stock) => stock.price || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({holdingsList.length})</h3>

      <div className="order-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>
            <tbody>
              {holdingsList.map((stock, index) => {
                const safeAvg = stock.avg || stock.price || 0;
                const safePrice = stock.price || 0;
                const safeQty = stock.qty || 0;

                const currValue = safePrice * safeQty;
                const investValue = safeAvg * safeQty;
                const dayPnl = currValue - investValue;

                const isProfit = dayPnl >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{safeQty}</td>
                    <td>{safeAvg.toFixed(2)}</td>
                    <td>{safePrice.toFixed(2)}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td className={profClass}>{dayPnl.toFixed(2)}</td>
                    <td className={profClass}>{stock.net || "0%"}</td>
                    <td className={dayClass}>{stock.day || "0%"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPnlClass}>
            {totalPnl.toFixed(2)} ({pnlPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <div className="chart-wrapper">
        <VerticalChart data={data} />
      </div>
    </>
  );
};

export default Holdings;