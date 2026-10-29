import React, { useState } from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <Topic title="Account Opening" icon="fa-plus">
            <ul
              className="ms-5 mt-3 text-primary"
              style={{ fontSize: "1.1rem" }}
            >
              <li>
                <a href="#" className="text-decoration-none">
                  Resident individual
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Minor
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Non Resident Indian (NRI)
                </a>
              </li>
            </ul>
          </Topic>

          <Topic title="Your FinVest Account" icon="fa-user">
            <ul
              className="ms-5 mt-3 text-primary"
              style={{ fontSize: "1.1rem" }}
            >
              <li>
                <a href="#" className="text-decoration-none">
                  Your Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Account modification
                </a>
              </li>
            </ul>
          </Topic>
          <Topic title="Kite" icon="fa-paper-plane">
            <ul
              className="ms-5 mt-3 text-primary"
              style={{ fontSize: "1.1rem" }}
            >
              <li>
                <a href="#" className="text-decoration-none">
                  IPO
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Trading FAQs
                </a>
              </li>
            </ul>
          </Topic>
          <Topic title="Funds" icon="fa-coins">
            <ul
              className="ms-5 mt-3 text-primary"
              style={{ fontSize: "1.1rem" }}
            >
              <li>
                <a href="#" className="text-decoration-none">
                  Add money
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Withdraw money
                </a>
              </li>
            </ul>
          </Topic>
        </div>

        <div className="col-12 col-lg-4 mt-5 mt-lg-0">
          <div
            className="p-3 mb-4"
            style={{
              backgroundColor: "#fff8f0",
              borderLeft: "4px solid #ff5722",
            }}
          >
            <ul className="list-unstyled mb-0 text-primary fw-bold">
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Current Buybacks - February 2026
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Offer for sale (OFS) – February 2026
                </a>
              </li>
            </ul>
          </div>

          <div className="card border-0">
            <div className="card-header bg-light fw-bold py-3">Quick links</div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 py-3">
                  <a href="#" className="text-decoration-none text-primary">
                    1. Track account opening
                  </a>
                </li>
                <li className="list-group-item border-0 py-3">
                  <a href="#" className="text-decoration-none text-primary">
                    2. Track segment activation
                  </a>
                </li>
                <li className="list-group-item border-0 py-3">
                  <a href="#" className="text-decoration-none text-primary">
                    3. Intraday margins
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Topic({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="d-flex align-items-center justify-content-between p-3 border rounded-2"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", backgroundColor: "#fff" }}
      >
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#f0f6ff",
              color: "#387ed1",
            }}
          >
            <i className={`fa-solid ${icon}`}></i>
          </div>
          <span className="fs-5 fw-normal text-dark">{title}</span>
        </div>
        <i
          className={`fa-solid fa-chevron-${isOpen ? "up" : "down"} text-muted`}
        ></i>
      </div>

      {isOpen && (
        <div className="p-3 border-start border-end border-bottom bg-white">
          {children}
        </div>
      )}
    </div>
  );
}

export default CreateTicket;
