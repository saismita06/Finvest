import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      window.history.replaceState({}, document.title, "/");
    }

    const verifyUser = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3002";
      const frontendUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:3000";

      try {
        const savedToken = localStorage.getItem("token") || tokenFromUrl;

        if (!savedToken) {
          window.location.href = `${frontendUrl}/login`;
          return;
        }

        const { data } = await axios.post(
          `${backendUrl}/`,
          { token: savedToken } 
        );

        if (data.status) {
          localStorage.setItem("username", data.user || "Trader");
          localStorage.setItem("email", data.email || "");
          setIsAuthorized(true);
        } else {
          // Agar verification response false aaye
          localStorage.removeItem("token");
          window.location.href = `${frontendUrl}/login`;
        }
      } catch (error) {
        console.error("Verification error:", error);
        // Agar backend call me error aaye lekin token exist karta hai, toh bhi access de do!
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
          setIsAuthorized(true);
        } else {
          window.location.href = `${frontendUrl}/login`;
        }
      }
    };

    verifyUser();
  }, []);

  if (!isAuthorized) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <h2>Loading Permissions...</h2>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;