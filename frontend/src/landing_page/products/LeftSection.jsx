import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-7 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>

        <div className="col-md-1 d-none d-md-block"></div>

        <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-start">
          <h2 className="fs-2">{productName}</h2>
          <p className="mt-3 text-muted">{productDescription}</p>

          <div className="mb-4 mt-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
              className="ms-4 ms-md-5"
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                style={{ width: "150px" }}
                className="img-fluid"
                alt="Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ width: "150px" }}
                className="img-fluid"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
