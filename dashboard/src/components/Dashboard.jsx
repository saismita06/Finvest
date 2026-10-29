import React from "react";
import { Route, Routes } from "react-router-dom";

import { GeneralContextProvider } from "./GeneralContext.jsx";
import WatchList from "./WatchList.jsx";
import Summary from "./Summary.jsx";
import Orders from "./Orders.jsx";
import Holdings from "./Holdings.jsx";
import Positions from "./Positions.jsx";
import Funds from "./Funds.jsx";
import Apps from "./Apps.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
