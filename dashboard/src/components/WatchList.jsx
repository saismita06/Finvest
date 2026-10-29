import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChart,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    openBuyWindow(stock.name, stock.price);
  };

  const handleSellClick = () => {
    openSellWindow(stock.name, stock.price);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <div className="item-left">
          <span className={stock.isDown ? "name down" : "name up"}>
            {stock.name}
          </span>
        </div>
        <div className="item-right">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" style={{ fontSize: "1rem" }} />
          ) : (
            <KeyboardArrowUp className="up" style={{ fontSize: "1rem" }} />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <div className="actions">
          {/* Buy Button */}
          <span style={{ marginRight: "8px" }}>
            <Tooltip
              title="Buy (B)"
              placement="top"
              arrow
              slots={{ transition: Grow }}
            >
              <button className="buy" onClick={handleBuyClick}>
                Buy
              </button>
            </Tooltip>
          </span>

          {/* Sell Button */}
          <span style={{ marginRight: "8px" }}>
            <Tooltip
              title="Sell (S)"
              placement="top"
              arrow
              slots={{ transition: Grow }}
            >
              <button className="sell" onClick={handleSellClick}>
                Sell
              </button>
            </Tooltip>
          </span>

          {/* Analytics Button (Visual Only) */}
          <span style={{ marginRight: "8px" }}>
            <Tooltip
              title="Analytics (A)"
              placement="top"
              arrow
              slots={{ transition: Grow }}
            >
              <button className="action">
                <BarChart style={{ fontSize: "1.2rem" }} />
              </button>
            </Tooltip>
          </span>

          {/* More Button (Visual Only) */}
          <span style={{ marginRight: "8px" }}>
            <Tooltip
              title="More"
              placement="top"
              arrow
              slots={{ transition: Grow }}
            >
              <button className="action">
                <MoreHoriz style={{ fontSize: "1.2rem" }} />
              </button>
            </Tooltip>
          </span>
        </div>
      )}
    </li>
  );
};
