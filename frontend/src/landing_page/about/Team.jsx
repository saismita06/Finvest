import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mb-3 mt-5 border-top">
        <div className="col-12 text-center mt-5">
          <h1 className="fs-4">People</h1>
        </div>
      </div>

      <div className="row p-3 p-md-5 align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/myPic.jpeg"
            alt="My Image"
            style={{ borderRadius: "10%", width: "50%" }}
          />
          <p className="fs-4 mt-3">Partha Pratim Maji</p>
          <p className="text-muted">Founder, Director</p>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p className="fs-6 lh-lg text-muted">
            "Hi, I'm Partha. I am a Full Stack Developer focused on the MERN
            stack. I build responsive, user-centric web applications using React
            for dynamic front-ends and Node.js/Express for robust back-end
            systems. Currently exploring cloud deployment and advanced state
            management to create seamless digital experiences."
          </p>
          <p className="mt-4">
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/maji-partha/"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>{" "}
            &nbsp;/&nbsp;{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/PARTHA-MAJI"
            >
              Github
            </a>{" "}
            &nbsp;/&nbsp;{" "}
            <a
              style={{ textDecoration: "none" }}
              href="mailto:parthapratimmaji81@gmail.com"
            >
              Mail
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
