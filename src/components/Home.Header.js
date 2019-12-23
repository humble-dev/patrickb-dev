import React from "react";

// import ManWithChicken from "../assets/found/chicken_and_man.jpg";

const Header = () => (
  <>
    <header className="container">
      <div
        className="row d-md-flex align-items-center"
        style={{ minHeight: "83vh" }}
      >
        {/* <div className="col-md-4">
          <div className="p-md-3 mt-5">
            <figure className="ml-auto" style={{ maxWidth: 170 }}>
              <img
                src={ManWithChicken}
                className="rounded-lg shadow-sm w-100"
                alt="Some pic"
              />
              <figcaption className="small text-center text-primary mt-2">
                "Fancy."
              </figcaption>
            </figure>
          </div>
        </div> */}
        <div className="col-12">
          <div className="py-sm-5 text-center">
            <h1 className="display-3 mb-1 solway__ font-weight-bold">
              Patrick Bradshaw
            </h1>
            <p className="mt-3 lead">I design and create software.</p>
            <div className="mt-5">
              <a
                href="mailto:hello@patrickb.dev"
                className="btn btn-sm_ btn-dark mr-2"
              >
                Email Me
              </a>
              <a
                href="http://www.linkedin.com/in/grandpatrick"
                className="btn btn-sm_ btn-dark mr-2"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="http://www.github.com/humble-dev"
                className="btn btn-sm_ btn-dark mr-2"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
