# 📈 FinVest — Smart Investment & Virtual Trading Platform

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB)
![Node](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933)
![Status](https://img.shields.io/badge/Status-Live-success)


A comprehensive, responsive stock trading dashboard built with the MERN stack. This platform allows users to create secure accounts, track a mock portfolio, and execute simulated buy/sell orders in a realistic trading environment.

## ✨ Key Features

- **Secure Authentication:** Robust user signup and login utilizing JWT (JSON Web Tokens) with secure, HTTP-only cross-origin cookies.
- **Interactive Dashboard:** Tracks total investment, current value, and real-time P&L (Profit & Loss) using interactive charts (Chart.js).
- **Simulated Trading Engine:** Custom Node.js backend logic that accurately calculates stock quantities, averages, and prevents invalid trades (e.g., short-selling stocks you don't own).
- **Reactive State Management:** Utilizes React Context API for instant UI updates across components when an order is executed, eliminating the need for page reloads.
- **Fully Responsive:** Mobile-first CSS design featuring horizontal swipe-scrolling for data-heavy tables and dynamic modal positioning.

## 🛠️ Tech Stack

**Frontend:**

- React.js (via Vite)
- React Router DOM (Single Page Application routing)
- Context API (Global state management)
- Axios (API communication)
- Chart.js (Data visualization)

**Backend:**

- Node.js & Express.js
- MongoDB & Mongoose (Database modeling)
- JSON Web Tokens (JWT) & Bcrypt (Auth & Hashing)
- Cookie-Parser & CORS (Cross-origin security)

**Deployment:**

- Vercel (Frontend)
- Render (Backend API)
- MongoDB Atlas (Cloud Database)

## 🚀 Future Roadmap

Given the data-heavy nature of financial applications, future updates planned for this platform include:

- **Algorithmic Analytics:** Integrating Python microservices or predictive data science models to calculate moving averages or project portfolio growth.
- **Live Market Data:** Transitioning from the mock trading environment to a real-time market API (e.g., Alpha Vantage or Yahoo Finance).
- **Advanced Charting:** Adding interactive candlestick charts for deeper technical analysis.

## 💻 Local Installation & Setup

If you wish to run this project locally, follow these steps:
git clone https://github.com/saismita06/Finvest.git
