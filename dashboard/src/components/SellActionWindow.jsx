import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, closeSellWindow, onTradeSuccess }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQty, setAvailableQty] = useState(0);
  const [isHoldingLoaded, setIsHoldingLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkHoldings = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/allHoldings`,
          { withCredentials: true },
        );
        const holdings = res.data;
        const currentStock = holdings.find((item) => item.name === uid);

        if (currentStock) {
          setAvailableQty(currentStock.qty);
          setStockPrice(currentStock.price);
        } else {
          setAvailableQty(0);
        }
        setIsHoldingLoaded(true);
      } catch (error) {
        console.error("Error checking holdings", error);
        setIsHoldingLoaded(true);
      }
    };

    checkHoldings();
  }, [uid]);

  const handleSellClick = () => {
    if (availableQty === 0) {
      alert("You cannot sell a stock you do not own!");
      return;
    }

    if (stockQuantity > availableQty) {
      alert(
        `You only have ${availableQty} shares. You cannot sell ${stockQuantity}.`,
      );
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        { withCredentials: true },
      )
      .then(() => {
        closeSellWindow();
        onTradeSuccess();
        navigate("/holdings");
      })
      .catch((error) => {
        console.error("Sell order failed:", error);
      });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="header" style={{ background: "#ff5722" }}>
          <h3 style={{ margin: 0, color: "white" }}>Sell {uid}</h3>
        </div>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max={availableQty}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>

        <div style={{ padding: "0 20px", fontSize: "0.8rem", color: "#555" }}>
          {!isHoldingLoaded ? (
            <span>Checking holdings...</span>
          ) : (
            <span>
              Available in Holdings: <strong>{availableQty}</strong>
            </span>
          )}
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button
            className="btn btn-red"
            onClick={handleSellClick}
            disabled={availableQty === 0}
            style={{
              opacity: availableQty === 0 ? 0.5 : 1,
              cursor: availableQty === 0 ? "not-allowed" : "pointer",
            }}
          >
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
