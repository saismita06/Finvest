import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3002";
      const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:3001";

      const { data } = await axios.post(
        `${backendUrl}/login`,
        {
          ...inputValue,
        },
      );

      console.log("Login Response from Backend:", data);
      const { success, message, token } = data;

      if (success) {
        handleSuccess(message || "Logged in successfully!");
        setTimeout(() => {
          window.location.href = `${dashboardUrl}/?token=${token}`;
        }, 1000);
      } else {
        handleError(message || "Incorrect email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      handleError(error.response?.data?.message || "Server connection failed");
    }

    if (!inputValue.email || !inputValue.password) {
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <p className="form-subtitle">
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit">Login</button>

            <div className="auth-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer closeButton={false} />
    </>
  );
};

export default Login;