import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const username = localStorage.getItem("username") || "User";
  const email = localStorage.getItem("email") || "user@example.com";

  const handleLogout = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://finvest-u33e.vercel.app";
      const frontendUrl = import.meta.env.VITE_FRONTEND_URL || "https://finvest-b7jx.vercel.app";

      await axios.post(
        `${backendUrl}/logout`,
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      window.location.href = `${frontendUrl}/login`;
    } catch (error) {
      console.error("Logout failed", error);

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      const frontendUrl = import.meta.env.VITE_FRONTEND_URL || "https://finvest-b7jx.vercel.app";
      window.location.href = `${frontendUrl}/login`;
    }
  };

  const toggleDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const getMenuClass = (path) => {
    return currentPath === path ? "menu-selected" : "menu-item";
  };

  return (
    <div className="menu-container">
      <img src="logo.svg" style={{ width: "36px", height: "36px" }} alt="FinVest Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p
                className={currentPath === "/" ? "menu-selected" : "menu-item"}
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={getMenuClass("/orders")}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={getMenuClass("/holdings")}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={getMenuClass("/positions")}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={getMenuClass("/funds")}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={getMenuClass("/apps")}>Apps</p>
            </Link>
          </li>
        </ul>

        <div className="profile" onClick={toggleDropdown}>
          <div className="avatar">{username.substring(0, 2).toUpperCase()}</div>
          <p className="username">{username}</p>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="popup-header">
                <p className="popup-username">{username}</p>
                <p className="popup-email">{email}</p>
              </div>
              <div className="popup-divider"></div>
              <div className="popup-item">
                <span className="icon">Profile</span>
              </div>
              <div className="popup-item" onClick={handleLogout}>
                <span className="icon">Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;