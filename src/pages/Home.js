import React from "react";

// import Eastwood from "../assets/images/eastwood-no-comments.png";
// import FlameRemote from "../assets/images/flame-remote-working.png";
import FlameDesign from "../assets/images/flame-design-science.png";
// import FlameUpgrade from "../assets/images/flame-upgrade.png";

const HomePage = () => (
  <section className="container">
    <div className="row d-md-flex align-items-center my-md-5">
      <div className="col-md-6 order-md-1 order-2">
        <div className="py-md-4">
          <h1 className="font-weight-bold mb-2">Patrick Bradshaw</h1>
          <h2 className="h5 text-muted mb-3">SOFTWARE DEVELOPER</h2>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum
            accusamus magni eligendi voluptatibus qui, tenetur optio sequi?
            Magnam distinctio minima beatae quam excepturi iste illo eaque, ut
            reprehenderit quis!
          </p>
          <div className="my-md-4 mt-4 mb-5">
            <a href="/" className="btn btn-dark mr-1">
              Button #1
            </a>
            <a href="/" className="btn btn-outline-dark mr-2">
              Button #2
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 order-md-2 order-1">
        <div className="mb-2">
          <img src={FlameDesign} alt="Eastwood" className="w-100" />
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
