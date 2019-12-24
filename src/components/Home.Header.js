import React from "react";

import HeaderImg from "../assets/images/pawel-czerwinski-unsplash.jpg";

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
            className="row d-md-flex align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12">
              <div className="py-sm-5 text-center">
                <h1 className="display-1 mb-4 solway font-weight-bold__ text-white">
                  Patrick Bradshaw
                </h1>
                <p className="mb-5 lead text-white">
                  I develop applications for the web.
                </p>
                <div className="">
                  <a
                    href="mailto:hello@patrickb.dev"
                    className="btn btn-sm_ btn-outline-white mr-2"
                  >
                    Email Me
                  </a>
                  <a
                    href="http://www.linkedin.com/in/grandpatrick"
                    className="btn btn-sm_ btn-outline-white mr-2"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    href="http://www.github.com/humble-dev"
                    className="btn btn-sm_ btn-outline-white mr-2"
                  >
                    <i className="fab fa-github-alt"></i>
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
