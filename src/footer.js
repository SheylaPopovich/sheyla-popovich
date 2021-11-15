import React from "react";

const Footer = () => (
  <div>
    <div className="row card-footer fixed-bottom text-center">
      <p className="col-4">
        <a
          href="https://github.com/SheylaPopovich"
          class="btn btn-social-icon btn-github"
          target="_blank"
        >
          <span class="fa fa-github fa-2x"></span>
        </a>
      </p>
      <p className="col-4">
        <a
          href="https://www.linkedin.com/in/sheyla-popovich-fsd/"
          class="btn btn-social-icon btn-linkedin"
          target="_blank"
        >
          <span class="fa-2x fab fa-linkedin"></span>
        </a>
      </p>
      <p className="col-4">
        <a
          href="https://www.instagram.com/sheyla_popovich/"
          class="btn btn-social-icon btn-instagram"
          target="_blank"
        >
          <span class="fa fa-instagram fa-2x "></span>
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
