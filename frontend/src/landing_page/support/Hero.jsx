import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container p-4 p-md-5">
        {" "}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
          <h3 className="mb-0 fs-4">Support Portal</h3>

          <button className="btn btn-primary ticket-btn">My ticket</button>
        </div>
        <div className="row justify-content-center mb-5 position-relative">
          <div className="col-12 col-md-10 position-relative">
            <i
              className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-4"
              style={{ zIndex: 1, color: "gray", fontSize: "1.2rem" }}
            ></i>

            <input
              type="text"
              className="form-control form-control-lg ps-5"
              placeholder="Eg: How do I open my account, How do i activate F&O..."
              style={{
                fontSize: "1rem",
                paddingLeft: "60px",
                height: "55px",
                border: "1px solid #eee",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
