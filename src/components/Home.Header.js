import React from "react";

import HeaderImg from "../assets/images/mononoke.jpg";

const Header = () => (
  <>
    <div
      style={{
        background: `url(${HeaderImg}) no-repeat center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100vh"
      }}
    >
      <header className="w-100">
        <div className="container">
          <div
            className="row d-md-flex align-items-end"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12">
              <div className="py-sm-4 text-sm-left text-center">
                <h1
                  className="mb-2 text-shadow fugaz"
                  style={{ color: "#fff" }}
                >
                  Patrick Bradshaw
                </h1>
                <p className="h5 mb-4 text-white text-shadow font-weight-normal">
                  I develop applications for the web.
                </p>
                <div className="pb-5 pb-sm-4 pb-m-3">
                  <a
                    href="mailto:hello@patrickb.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-dark mr-2"
                  >
                    Email
                  </a>
                  <a
                    href="http://www.linkedin.com/in/grandpatrick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-dark mr-2"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="http://www.github.com/humble-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-dark mr-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </>
);

export default Header;
