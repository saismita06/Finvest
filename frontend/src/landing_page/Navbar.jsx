import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
      <div className="container">
        {/* Logo and Toggler Wrapper for Mobile Alignment */}
        <div className="d-flex justify-content-between w-100 d-lg-block w-lg-auto align-items-center">
          <Link
            className="navbar-brand"
            to="/"
            onClick={handleLinkClick}
            style={{ padding: 0 }}
          >
            <img
              src="media/images/logo.svg"
              style={{ width: "130px", display: "block" }}
              alt="FinVest Logo"
            />
          </Link>

          {/* Toggler Button - Standard Bootstrap Hamburger */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 gap-2 mt-3 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/signup" onClick={handleLinkClick}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product"
                onClick={handleLinkClick}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/pricing"
                onClick={handleLinkClick}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/support"
                onClick={handleLinkClick}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
