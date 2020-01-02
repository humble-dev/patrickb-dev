import React from "react";

const Footer = () => (
  <footer className="w-100 bg-dark text-white py-4">
    <div className="container-fluid py-5 text-center">
      <p className="h3 mb-2">
        <a href="mailto:hello@patrickb.dev" className="text-light fugaz">
          hello@patrickb.dev
        </a>
      </p>
      <p
        className="small font-weight-normal mb-0 text-muted"
        style={{ letterSpacing: 1.2 }}
      >
        ©2019-2020 PATRICK BRADSHAW
      </p>
      <p className="mb-0 mt-3 lead">
        <a
          href="//linkedin.com/in/grandpatrick/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-3"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="//github.com/humble-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-3"
        >
          <i className="fab fa-github" />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
