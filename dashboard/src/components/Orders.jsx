import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3002";
        const userEmail = localStorage.getItem("email") || "";

        const res = await axios.get(
          `${backendUrl}/allOrders${userEmail ? `?userEmail=${userEmail}` : ""}`,
          { withCredentials: true }
        );

        if (Array.isArray(res.data)) {
          setAllOrders(res.data);
        } else {
          setAllOrders([]);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "#666" }}>
        <p>Loading your orders...</p>
      </div>
    );
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 30px", maxWidth: "1100px" }}>
      <h3 style={{ fontSize: "20px", color: "#444", marginBottom: "20px" }}>
        Executed Orders ({allOrders.length})
      </h3>

      <div className="order-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                const orderTime = order.createdAt
                  ? new Date(order.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Today";

                const isBuy = order.mode === "BUY";

                return (
                  <tr key={index}>
                    <td style={{ color: "#888", fontSize: "13px" }}>{orderTime}</td>
                    <td>
                      <span
                        style={{
                          backgroundColor: isBuy ? "#e8f4fd" : "#fde8e8",
                          color: isBuy ? "#387ed1" : "#df514c",
                          padding: "3px 8px",
                          borderRadius: "3px",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {order.mode || "BUY"}
                      </span>
                    </td>
                    <td style={{ fontWeight: "600", color: "#333" }}>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>₹{Number(order.price || 0).toFixed(2)}</td>
                    <td>
                      <span
                        style={{
                          color: "#27ae60",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        ● COMPLETE
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;