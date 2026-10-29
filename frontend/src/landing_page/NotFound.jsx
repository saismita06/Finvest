import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-5 display-4 fw-bold">404</h1>
          <h2 className="fs-3 text-muted">Page Not Found</h2>

          <p className="mt-4 fs-5 text-muted px-3">
            Sorry, the page you are looking for does not exist.
          </p>

          <div className="mt-5 mb-5">
            <Link to="/" className="btn btn-primary px-5 py-2 fs-5">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
