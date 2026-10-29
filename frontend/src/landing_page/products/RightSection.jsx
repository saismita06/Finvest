import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-4 order-2 order-md-1 mt-4 mt-md-0 text-center text-md-start">
          <h2 className="fs-2">{productName}</h2>
          <p className="mt-3 text-muted">{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-md-1 d-none d-md-block order-md-2"></div>

        <div className="col-12 col-md-5 order-1 order-md-3 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
